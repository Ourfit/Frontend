import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const Wrapper = styled.div<{ $isInputFocus: boolean }>`
  position: relative;
  padding: 0 20px;
  box-sizing: border-box;

  height: 52px;
  border-radius: 16px;
  background-color: ${COLORS.GRAYSCALE_100};

  display: flex;
  align-items: center;

  width: 100%;
  max-width: 450px;
  gap: 8px;
  border: ${({ $isInputFocus }) =>
    $isInputFocus ? `1px solid ${COLORS.BLUE_500}` : "1px solid transparent"};

  & > svg {
    width: 24px;
    height: 24px;
  }
`;

export const InputBox = styled.input`
  ${Typography.H4Md}
  box-sizing: border-box;
  color: ${COLORS.GRAYSCALE_900};
  border: none;
  width: 200px;
  outline: none;
  background-color: transparent;

  &::placeholder {
    color: ${COLORS.GRAYSCALE_600};
  }
`;
