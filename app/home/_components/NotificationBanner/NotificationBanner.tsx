"use client";

import ChevroRightIcon from "@/assets/images/chevron-right.svg";
import DumbbellsIcon from "@/assets/images/dumbbells.svg";
import { Typography } from "@/components/atoms/Typography";
import * as S from "./NotificationBanner.style";
import { useQuery } from "@tanstack/react-query";
import { MateHistory } from "@/types/mates";
import { dateFormat } from "@/utils/monthList";
import getMatesHistory from "@/services/getMatesHistory";

export default function NotificationBanner() {
  const { data, isLoading } = useQuery({
    queryKey: ["history"],
    queryFn: () => getMatesHistory({ actionTypes: "RECEIVE", size: 1 }),
  });

  const mateHistory: MateHistory[] = data?.data.content;
  const notification = mateHistory
    ? mateHistory.filter(
        (e) =>
          e.roleType === "TARGET" &&
          !e.isRead &&
          new Date(e.createdAt).setHours(0, 0, 0, 0) ===
            new Date().setHours(0, 0, 0, 0),
      )
    : [];

  const isNoAlarm = !data || isLoading || !notification.length;

  return (
    <S.BannerWrapper>
      <S.BannerContainer $isHome={true}>
        <S.ContentWrapper>
          <S.IconWrapper>
            <DumbbellsIcon />
          </S.IconWrapper>
          <S.NotificationContent $isHome={true}>
            <Typography.H6Md>{dateFormat(new Date(), "MD")}</Typography.H6Md>
            <Typography.H4Sb>
              {isNoAlarm
                ? "오늘은 알림 소식이 없어요!"
                : "운동 메이트 신청이 있어요!"}
            </Typography.H4Sb>
          </S.NotificationContent>
        </S.ContentWrapper>
        {!isNoAlarm && <ChevroRightIcon />}
      </S.BannerContainer>
    </S.BannerWrapper>
  );
}
