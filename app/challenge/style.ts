import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const PageContainer = styled.div<{
  $bgColorGray?: boolean;
}>`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  flex-grow: 1;
  box-sizing: border-box;
  background-color: ${({ $bgColorGray = false }) =>
    $bgColorGray ? COLORS.GRAYSCALE_100 : COLORS.BASE_WHITE};
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MateContent = styled.div`
  flex-grow: 1;
`;

export const MateList = styled.div`
  padding: 0 20px;
  display: flex;
  gap: 16px;
  overflow-y: scroll;
  height: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CalendarWrapper = styled.div`
  padding: 16px 20px 20px;
`;
