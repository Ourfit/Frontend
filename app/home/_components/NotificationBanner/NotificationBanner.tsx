"use client";

import ChevroRightIcon from "@/assets/images/chevron-right.svg";
import DumbbellsIcon from "@/assets/images/dumbbells.svg";
import { Typography } from "@/components/atoms/Typography";
import * as S from "./NotificationBanner.style";
import { useQuery } from "@tanstack/react-query";
import { MateHistory } from "@/types/mates";
import { dateFormat } from "@/utils/monthList";
import getNotifications from "@/services/getNotifications";

export default function NotificationBanner({ nickname }: { nickname: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ["history"],
    queryFn: () => getNotifications(),
  });

  const mateHistory: MateHistory[] = data?.data.content;
  const notification = mateHistory
    ? mateHistory.filter((e) => e.targetNickname === nickname)
    : [];

  if (!data || isLoading || !notification.length) return <></>;

  return (
    <S.BannerWrapper>
      <S.BannerContainer $isHome={true}>
        <S.ContentWrapper>
          <S.IconWrapper>
            <DumbbellsIcon />
          </S.IconWrapper>
          <S.NotificationContent $isHome={true}>
            <Typography.H6Md>
              {dateFormat(new Date(notification[0].createdAt), "MD")}
            </Typography.H6Md>
            <Typography.H4Sb>운동 메이트 신청이 있어요!</Typography.H4Sb>
          </S.NotificationContent>
        </S.ContentWrapper>
        <ChevroRightIcon />
      </S.BannerContainer>
    </S.BannerWrapper>
  );
}
