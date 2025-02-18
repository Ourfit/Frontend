import styled from "styled-components";
import { COLORS } from "@/constants/Theme";

export const TimePreferenceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  height: 100%;
`;

export const TimePreferenceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  color: ${COLORS.GRAYSCALE_900};
  flex-grow: 1;
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

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
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
  margin-top: auto;
`;

export const TextButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  color: ${COLORS.GRAYSCALE_600};
  white-space: nowrap;
`;
