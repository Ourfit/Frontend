import { TypographyCss } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  min-width: 90%;
  height: 100%;
  padding: 24px 0 48px 0;
`;

export const CardWrapper = styled.div`
  width: 100%;
  background-color: ${COLORS.BASE_WHITE};
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 20px;
  height: 100%;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.06);
`;

export const MateProfile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const BasicInfoWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
`;

export const BasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: ${COLORS.GRAYSCALE_900};

  & > span:last-child {
    color: ${COLORS.GRAYSCALE_600};
  }
`;

export const LevelBadge = styled.div`
  ${TypographyCss.H6Sb}

  background-color: ${COLORS.BLUE_50};
  color: ${COLORS.BLUE_500};
  padding: 8px 10px;
  border-radius: 10px;
`;

export const Divider = styled.hr`
  height: 1.5px;
  background-color: ${COLORS.GRAYSCALE_100};
  border: 0;
  margin: 0 6px;
`;

export const MainContent = styled.div`
  flex-grow: 1;
`;
