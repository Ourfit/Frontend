import styled from "styled-components";
import { COLORS } from "@/constants/Theme";

export const MyChallengeWrapper = styled.div`
  padding-top: 20px;
`;

export const NoMateWrapper = styled.div`
  height: calc(100svh - 245px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const NoMateText = styled.p`
  color: ${COLORS.GRAYSCALE_500};
`;

export const MateWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 16px;
  overflow-x: auto;

  & > * {
    flex-shrink: 0;
  }

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
