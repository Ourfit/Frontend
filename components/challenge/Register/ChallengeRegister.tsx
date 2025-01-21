import { Typography } from "@/components/atoms/Typography";
import * as S from "./ChallengeRegister.style";
import { COLORS } from "@/constants/Theme";

export default function ChallengeRegister() {
  return (
    <S.ChallengeRegisterContainer>
      <S.ExplainContainer>
        <S.TextWrapper>
          <Typography.H3Md color={COLORS.GRAYSCALE_700}>
            메이트와 함께 도전할
          </Typography.H3Md>
          <Typography.H1Sb>운동 목표를 설정할게요</Typography.H1Sb>
        </S.TextWrapper>
      </S.ExplainContainer>
    </S.ChallengeRegisterContainer>
  );
}
