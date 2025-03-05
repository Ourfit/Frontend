"use client";

import ChevroRightIcon from "@/assets/images/chevron-right.svg";
import DumbbellsIcon from "@/assets/images/dumbbells.svg";
import { Typography } from "@/components/atoms/Typography";
import * as S from "./NotificationBanner.style";
import { useQuery } from "@tanstack/react-query";
import { MateHistory } from "@/types/mates";
import { dateFormat } from "@/utils/monthList";
import getMatesHistory from "@/services/getMatesHistory";

export default function NotificationBanner({
  isChallenge,
}: {
  isChallenge?: boolean;
}) {
  const { data, isLoading } = useQuery({
    queryKey: ["history"],
    queryFn: () => getMatesHistory({ actionTypes: "RECEIVE", size: 1 }),
  });

  const mateHistory: MateHistory[] = data?.data.content;
  const notification = mateHistory
    ? mateHistory.filter((e) => e.roleType === "TARGET" && !e.isRead)
    : [];

  if (!isChallenge && (isLoading || !notification.length)) return <></>;

  return (
    <S.BannerWrapper>
      <S.BannerContainer $isChallenge={isChallenge}>
        <S.ContentWrapper>
          <S.IconWrapper $isChallenge={isChallenge}>
            <DumbbellsIcon />
          </S.IconWrapper>
          <S.NotificationContent $isChallenge={isChallenge}>
            <Typography.H6Md>
              {isChallenge
                ? "챌린지 도전"
                : dateFormat(new Date(notification[0].createdAt), "MD")}
            </Typography.H6Md>
            <Typography.H4Sb>
              {isChallenge
                ? "챌린지 시작 +24일!"
                : "운동 메이트 신청이 있어요!"}
            </Typography.H4Sb>
          </S.NotificationContent>
        </S.ContentWrapper>
        {!isChallenge && <ChevroRightIcon />}
      </S.BannerContainer>
    </S.BannerWrapper>
  );
}
