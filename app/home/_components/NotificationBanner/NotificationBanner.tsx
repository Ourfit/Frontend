import ChevroRightIcon from "@/assets/images/chevron-right.svg";
import DumbbellsIcon from "@/assets/images/dumbbells.svg";
import { Typography } from "@/components/atoms/Typography";
import * as S from "./NotificationBanner.style";

export default function NotificationBanner() {
  return (
    <S.BannerWrapper>
      <S.BannerContainer $isHome={true}>
        <S.ContentWrapper>
          <S.IconWrapper>
            <DumbbellsIcon />
          </S.IconWrapper>
          <S.NotificationContent $isHome={true}>
            <Typography.H6Md>12월 13일</Typography.H6Md>
            <Typography.H4Sb>운동 메이트 신청이 있어요!</Typography.H4Sb>
          </S.NotificationContent>
        </S.ContentWrapper>
        <ChevroRightIcon />
      </S.BannerContainer>
    </S.BannerWrapper>
  );
}
