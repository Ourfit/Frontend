import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 20px;
  padding-right: 20px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  & > span:last-child {
    color: ${COLORS.GRAYSCALE_600};
  }
`;

export const SeeMoreButton = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
  color: ${COLORS.GRAYSCALE_700};
  cursor: pointer;
`;
