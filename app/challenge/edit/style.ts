import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const EditPageContainer = styled.div`
  padding: 48px 20px 28px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const FitnessSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  color: ${COLORS.GRAYSCALE_900};
  flex-grow: 1;
`;

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TextButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  white-space: nowrap;
  flex-wrap: wrap;
`;
