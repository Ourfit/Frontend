import ChevroRightIcon from "@/assets/images/chevron-right.svg";
import DumbbellsIcon from "@/assets/images/dumbbells.svg";
import { Typography } from "@/components/atoms/Typography";
import * as S from "./NotificationBanner.style";

export default function NotificationBanner({ isChallenge }: { isChallenge?: boolean }) {
  return (
    <S.BannerContainer $isChallenge={isChallenge}>
      <S.ContentWrapper>
        <S.IconWrapper>
          <DumbbellsIcon />
        </S.IconWrapper>
        <S.NotificationContent $isChallenge={isChallenge}>
          {isChallenge ? (
            <>
              <Typography.H6Md>챌린지 도전</Typography.H6Md>
              <Typography.H4Sb>챌린지 시작 +24일!</Typography.H4Sb>
            </>
          ) : (
            <>
              <Typography.H6Md>12월 13일</Typography.H6Md>
              <Typography.H4Sb>운동 메이트 신청이 있어요!</Typography.H4Sb>
            </>
          )}
        </S.NotificationContent>
      </S.ContentWrapper>
      {!isChallenge && <ChevroRightIcon />}
    </S.BannerContainer>
  );
}
