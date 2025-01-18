import styled from "styled-components";
import TextButton from "@/components/common/TextButton";

export const GenderAgeContainer = styled.div`
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
  flex-direction: column;
  gap: 16px;
  align-items: start;
`;

export const CustomTextButton = styled(TextButton)`
  display: flex;
  gap: 8px;
`;
