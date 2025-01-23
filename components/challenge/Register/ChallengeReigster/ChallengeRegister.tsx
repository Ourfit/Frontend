import { Typography } from "@/components/atoms/Typography";
import * as S from "./ChallengeRegister.style";
import { COLORS } from "@/constants/Theme";
import BadgeIcon from "@/assets/images/badge1.svg";
import CircleCheck from "@/assets/images/circle-check.svg";
import Button from "@/components/common/Button";

export default function ChallengeRegister({
  setIsChallengeSetting,
}: {
  setIsChallengeSetting: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <S.ChallengeRegisterContainer>
      <S.ExplainContainer>
        <S.TextWrapper>
          <Typography.H3Md color={COLORS.GRAYSCALE_700}>
            메이트와 함께 도전할
          </Typography.H3Md>
          <Typography.H1Sb>
            <S.HighlightedText>운동 목표</S.HighlightedText>를 설정할게요
          </Typography.H1Sb>
        </S.TextWrapper>
        <BadgeIcon />
        <S.RegisterConditionWrapper>
          <S.ConditionTextWrapper>
            <S.ConditionText>
              <CircleCheck fill={COLORS.GRAYSCALE_400} />
              <Typography.H4Md color={COLORS.GRAYSCALE_700}>
                메이트랑 같은 도전 조건이 아니어도 돼요
              </Typography.H4Md>
            </S.ConditionText>
            <S.ConditionText>
              <CircleCheck fill={COLORS.GRAYSCALE_400} />
              <Typography.H4Md color={COLORS.GRAYSCALE_700}>
                도전 조건은 추후에 수정할 수 없어요(*요일 제외)
              </Typography.H4Md>
            </S.ConditionText>
          </S.ConditionTextWrapper>
        </S.RegisterConditionWrapper>
      </S.ExplainContainer>
      <S.StartButtonWrapper>
        <Button
          size="l"
          variant="primary"
          onClick={() => setIsChallengeSetting(true)}
        >
          <Typography.H4Sb>시작하기</Typography.H4Sb>
        </Button>
      </S.StartButtonWrapper>
    </S.ChallengeRegisterContainer>
  );
}
