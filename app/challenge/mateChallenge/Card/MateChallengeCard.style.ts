import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding-bottom: 24px;

  & > svg {
    width: 20px;
    height: 20px;
    color: ${COLORS.GRAYSCALE_800};
  }

  text-align: center;
  position: relative;
  padding-top: 16px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 90%;
    height: 1px;
    background-color: ${COLORS.GRAYSCALE_100};
  }
`;

export const MainContainer = styled.div`
  gap: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
`;

// 달성률 관련
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 15px 15px 9px;
`;

export const PercentIconWrapper = styled.div`
  margin-left: 80%;
`;

export const HalfIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 9px 15px 15px 9px;
`;

export const TextOverlay = styled.div`
  position: absolute;
  text-align: center;

  & .percentage {
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.2px;
    color: ${COLORS.GRAYSCALE_900};
  }

  & .label {
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    letter-spacing: -0.1px;
    color: ${COLORS.GRAYSCALE_600};
  }
`;
