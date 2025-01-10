import styled from "styled-components";
import { COLORS } from "@/constants/Theme";

export const TimePreferenceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
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
  flex-direction: column;
  justify-content: flex-start;
  gap: 12px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  box-sizing: border-box;
  width: 65px;
`;

export const TextButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  gap: 10px;
  color: ${COLORS.GRAYSCALE_600};
  white-space: nowrap;
`;
