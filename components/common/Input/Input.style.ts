"use client";

import { TypographyCss } from "@/components/atoms/Typography";
import { INPUT_STATUS, InputStatus } from "@/constants/InputStatus";
import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  width: 100%;
  height: 52px;
`;

export const StyledInput = styled.input<{
  $status: InputStatus;
  $borderColor?: boolean;
  $isInputFocus: boolean;
}>`
  flex: 1;
  border: 1.4px solid
    ${({ $status, $borderColor = false, $isInputFocus }) => {
      if ($isInputFocus) {
        return $status === INPUT_STATUS.ERROR ? "#F46767" : COLORS.BLUE_500;
      }
      switch ($status) {
        case INPUT_STATUS.COMPLETE:
          return COLORS.BLUE_500;
        case INPUT_STATUS.ERROR:
          return "#F46767";
        default:
          return $borderColor ? COLORS.GRAYSCALE_300 : "transparent";
      }
    }};
  outline: none;

  width: 100%;
  height: 100%;

  padding: 0 0 0 20px;
  border-radius: 16px;
  box-sizing: border-box;
  background-color: #f9f9f9;
  color: #333;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ${TypographyCss.H4Md};

  &::placeholder {
    color: ${COLORS.GRAYSCALE_600};
  }
`;

export const IconsContainer = styled.div<{ $hasStatusIcon: boolean }>`
  display: flex;
  align-items: center;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  gap: ${({ $hasStatusIcon }) => ($hasStatusIcon ? "12px" : "0")};

  width: ${({ $hasStatusIcon }) => ($hasStatusIcon ? "auto" : "20px")};
`;

export const Icon = styled.div<{
  $cursor?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  right: 20px;

  & > svg {
    pointer-events: auto;
    cursor: ${({ $cursor = "auto" }) => $cursor};
  }
`;
