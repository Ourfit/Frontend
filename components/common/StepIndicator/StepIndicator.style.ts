import { COLORS } from "@/constants/Theme";
import EllipseIcon from "@/assets/images/ellipse.svg";
import styled from "styled-components";

export const StepContainer = styled.div`
  display: flex;
  gap: 4px;
`;

export const Ellipse = styled(EllipseIcon)<{ $isActive: boolean }>`
  & > circle {
    fill: ${({ $isActive }) =>
      $isActive ? COLORS.BLUE_500 : COLORS.GRAYSCALE_200} !important;
  }
`;
