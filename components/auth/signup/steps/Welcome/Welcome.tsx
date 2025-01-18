import BadgeIcon from "@/assets/images/badge1.svg";
import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import * as S from "./Welcome.style";

const Welcome = () => {
  return (
    <S.WelComeContainer>
      <S.WelcomeContentWrapper>
        <Typography.H3Md color={COLORS.GRAYSCALE_700}>
          환영해요!
        </Typography.H3Md>
        <S.GradientTextWrapper>
          <S.GradientText>이제 운동 메이트를</S.GradientText>
          <S.GradientText>찾아볼까요?</S.GradientText>
        </S.GradientTextWrapper>
      </S.WelcomeContentWrapper>
      <BadgeIcon />
    </S.WelComeContainer>
  );
};

export default Welcome;
