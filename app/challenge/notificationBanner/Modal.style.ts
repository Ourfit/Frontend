import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const Notification = styled.div`
  position: fixed;
  top: 7%;
  left: 20%;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 16px;
  z-index: 10;
  background-color: ${COLORS.TRANSPARENT_BLACK70};
  color: ${COLORS.BASE_WHITE};
`;

export const ModalContainer = styled.div`
  position: fixed;
  bottom: 0%;
  left: 0%;

  width: 100%;
  flex-direction: column;
  border-radius: 16px 16px 0px 0px;

  display: flex;
  justify-content: center;
  z-index: 1;
  border: 1px solid ${COLORS.GRAYSCALE_200};
  width: 100%;
  background-color: ${COLORS.BASE_WHITE};
  height: 70%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  padding: 16px 20px 20px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  align-self: stretch;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 28px;
  padding: 20px;
`;

export const TextContainer = styled.div`
  margin-bottom: 5%;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const TitleContent = styled.div`
  flex: 1 0 0;
  color: ${COLORS.GRAYSCALE_900};

  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.54px;
`;

export const QuestionContent = styled.div`
  align-self: stretch;
  color: ${COLORS.GRAYSCALE_900};
`;

export const AnswerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

export const AnswerButton = styled.button<{ isSelected: boolean }>`
  display: flex;
  padding: 12px 20px;
  gap: 8px;
  color: ${({ isSelected }) =>
    isSelected ? COLORS.BLUE_500 : COLORS.GRAYSCALE_600};
  background-color: ${({ isSelected }) =>
    isSelected ? COLORS.BLUE_50 : COLORS.BASE_WHITE};
  border: 1px solid
    ${({ isSelected }) => (isSelected ? COLORS.BLUE_500 : COLORS.GRAYSCALE_600)};
  border-radius: 12px;
`;
