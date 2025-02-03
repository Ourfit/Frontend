import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const NotificationContent = styled.div<{ $isChallenge?: boolean }>`
  display: flex;
  flex-direction: column;

  & > span {
    &:first-child {
      color: ${COLORS.BLUE_300};
    }

    &:last-child {
      color: ${COLORS.BLUE_500};
    }
  }
`;
