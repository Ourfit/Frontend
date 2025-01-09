import styled from "styled-components";
import { COLORS } from "@/constants/Theme";
import { Typography } from "@/components/atoms/Typography";

export const Wrapper = styled.div<{ $isInputFocus: boolean }>`
  position: relative;
  padding: 0 20px;
  height: 52px;
  border-radius: 16px;
  background-color: ${COLORS.GRAYSCALE_100};
  display: flex;
  align-items: center;
  width: 100%;
  gap: 8px;
  border: ${({ $isInputFocus }) =>
    $isInputFocus ? `1px solid ${COLORS.BLUE_500}` : "1px solid transparent"};
`;

export const InputBox = styled.input`
  ${Typography.H4Md}
  box-sizing: border-box;
  color: ${COLORS.GRAYSCALE_600};
  border: none;
  width: 200px;
  outline: none;
  background-color: transparent;

  &::placeholder {
    color: ${COLORS.GRAYSCALE_600};
  }
`;

export const InputLength = styled.p`
  ${Typography.H4Md}
`;
