import { TypographyCss } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  bottom: 0%;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  max-width: 450px;
  border-radius: 16px 16px 0px 0px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  border: 1px solid ${COLORS.GRAYSCALE_200};
  background-color: ${COLORS.BASE_WHITE};
`;

export const TextContainer = styled.div``;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 0 20px;

  & > svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
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

export const ModalBarWrapper = styled.div`
  height: 28px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 6px;
`;

export const ModalBar = styled.div`
  width: 58px;
  height: 4px;
  background-color: ${COLORS.GRAYSCALE_400};
  border-radius: 10px;
  opacity: 0.55;
`;

export const ContentWrapper = styled.div`
  padding: 16px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const QuestionContent = styled.div`
  ${TypographyCss.H4Sb}

  color: ${COLORS.GRAYSCALE_900};
`;

export const AnswerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

export const AnswerButton = styled.button<{ $isSelected: boolean }>`
  display: flex;
  padding: 12px 20px;
  gap: 8px;
  color: ${({ $isSelected }) =>
    $isSelected ? COLORS.BLUE_500 : COLORS.GRAYSCALE_600};
  background-color: ${({ $isSelected }) =>
    $isSelected ? COLORS.BLUE_50 : COLORS.BASE_WHITE};
  border: 1px solid
    ${({ $isSelected }) =>
      $isSelected ? COLORS.BLUE_500 : COLORS.GRAYSCALE_200};
  border-radius: 12px;
  white-space: nowrap;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 28px;
  padding: 12px 20px 28px 20px;
`;
