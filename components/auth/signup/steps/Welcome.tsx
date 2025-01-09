import styled from "styled-components";
import BadgeIcon from "@/assets/images/badge1.svg";
import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";

const WelComeContainer = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

const WelcomeContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
  align-items: center;
`;

const GradientTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GradientText = styled(Typography.H1Sb)`
  background: linear-gradient(90deg, #163bff 0%, #bc42c3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Welcome = () => {
  return (
    <WelComeContainer>
      <WelcomeContentWrapper>
        <Typography.H3Md color={COLORS.GRAYSCALE_700}>
          환영해요!
        </Typography.H3Md>
        <GradientTextWrapper>
          <GradientText>이제 운동 메이트를</GradientText>
          <GradientText>찾아볼까요?</GradientText>
        </GradientTextWrapper>
      </WelcomeContentWrapper>
      <BadgeIcon />
    </WelComeContainer>
  );
};

export default Welcome;
