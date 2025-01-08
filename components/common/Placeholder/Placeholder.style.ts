import styled from "styled-components";
import { COLORS } from "@/constants/Theme";

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
  box-sizing: border-box;
  color: ${COLORS.GRAYSCALE_600};
  font-size: 14px;
  border: none;
  width: 200px;
  outline: none;
  background-color: transparent;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.28px;
`;

export const InputLength = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.28px;
`;
