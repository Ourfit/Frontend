import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const DescriptionWrapper = styled.div`
  display: flex;
  padding: 14px 20px;
  flex-direction: column;
  align-items: flex-start;
  margin: 0px 24px;
  gap: 16px;
  align-self: stretch;
  border-radius: 12px;
  background-color: ${COLORS.GRAYSCALE_100};
`;

export const Content = styled.div`
  text-align: left;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.14px;
  color: ${COLORS.GRAYSCALE_700};
`;

export const PointContent = styled.div`
  text-align: left;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.14px;
  color: ${COLORS.BLUE_500};
`;

export const GrayCheckIconWrapper = styled.div`
  width: 20px;
  height: 20px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;
