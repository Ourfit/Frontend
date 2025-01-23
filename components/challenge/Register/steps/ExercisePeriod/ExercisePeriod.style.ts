import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
`;

export const HighlightedText = styled.span`
  color: ${COLORS.BLUE_500};
`;

export const SelectBarWrapper = styled.div`
  margin-top: 32px;
`;

export const NextButtonWrapper = styled.div`
  position: absolute;
  bottom: 28px;
  width: 100%;
`;
