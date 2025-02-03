import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const MainContainer2 = styled.div`
  display: flex;
  padding-top: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;

export const Step = styled.div`
  display: flex;
  padding: 40px 20px 0px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;

  width: 100px;
  height: 100px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const StepContentWrapper = styled.div``;

export const TitleContent = styled.div`
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
  color: ${COLORS.BLUE_900};
`;

export const PointContent = styled.div`
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
  color: ${COLORS.BLUE_500};
`;

export const PointDateContent = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.14px;
  color: ${COLORS.BLUE_500};
`;

export const Content = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.14px;
  text-align: left;
  color: ${COLORS.GRAYSCALE_700};
`;

export const TitleDescriptionContent = styled.div`
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.14px;
  color: ${COLORS.GRAYSCALE_600};
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
`;

export const TitleContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 8px;
`;
