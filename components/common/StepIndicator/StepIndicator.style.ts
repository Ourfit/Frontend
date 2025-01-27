import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const StepContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const Ellipse = styled.div<{ $isActive: boolean }>`
  & > svg {
    width: 6px;
    height: 6px;
    color: ${({ $isActive }) =>
      $isActive ? COLORS.BLUE_500 : COLORS.GRAYSCALE_200} !important;
  }
`;
