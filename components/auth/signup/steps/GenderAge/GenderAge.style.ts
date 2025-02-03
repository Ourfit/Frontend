import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const GenderAgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const GenderAgeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  color: ${COLORS.GRAYSCALE_900};
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

export const TextButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
