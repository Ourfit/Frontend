import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const PeriodContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const PeriodContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 30%;
`;

export const CalendarContentWrapper = styled.div`
  border-radius: 20px;
  background-color: ${COLORS.BASE_WHITE};
  border: 1px solid ${COLORS.GRAYSCALE_200};
  padding: 20px 8px 8px 8px;
`;
