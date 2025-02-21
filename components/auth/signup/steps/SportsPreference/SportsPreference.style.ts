import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const SportsPreferenceWrapper = styled.div<{
  $isHeightFull?: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 32px;
  color: ${COLORS.GRAYSCALE_900};
  flex-grow: ${({ $isHeightFull = true }) => ($isHeightFull ? "1" : "auto")};
`;

export const SignupIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SignupIntroTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  bottom: 0;
`;

export const ButtonWrapper = styled.div`
  box-sizing: border-box;
  width: 65px;
`;

export const TextButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  white-space: nowrap;
  flex-wrap: wrap;
`;
