import styled from "styled-components";
import { Typography } from "@/components/atoms/Typography";

export const WelComeContainer = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

export const WelcomeContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
  align-items: center;
`;

export const GradientTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GradientText = styled(Typography.H1Sb)`
  background: linear-gradient(90deg, #163bff 0%, #bc42c3 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
