import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 24px;
`;

export const LeftTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  gap: 4px;
`;

export const RigthTitleContainer = styled.div`
  display: flex;
`;

export const DeadLineTitle = styled.div`
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.12px;
  color: ${COLORS.GRAYSCALE_900};
`;

export const DateTitle = styled.div`
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.12px;
  color: ${COLORS.GRAYSCALE_600};
`;

export const DdayTitle = styled.div`
  display: flex;
  padding: 6px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 40px;
  background: ${COLORS.GRAYSCALE_100};

  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.13px;
  color: ${COLORS.GRAYSCALE_900};
`;
