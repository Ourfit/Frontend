"use client";

import { TypographyCss } from "@/components/atoms/Typography";
import { INPUT_STATUS, InputStatus } from "@/constants/InputStatus";
import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 350px;
  height: 52px;

  position: fixed;
  bottom: 30%;
  left: 50%;
  transform: translateX(-50%);
`;

export const StyledInput = styled.input<{ $status: InputStatus }>`
  flex: 1;
  border: 1.4px solid
    ${({ $status }) => {
      switch ($status) {
        case INPUT_STATUS.COMPLETE:
          return "#004dff";
        case INPUT_STATUS.ERROR:
          return "#F46767";
        default:
          return "transparent";
      }
    }};
  outline: none;

  width: 100%;
  height: 100%;

  padding: 0 20px;
  border-radius: 16px;
  box-sizing: border-box;
  background-color: #f9f9f9;
  color: #333;

  ${TypographyCss.H4Md};

  &::placeholder {
    color: #aaa;
  }
`;

export const IconsContainer = styled.div<{ $hasStatusIcon: boolean }>`
  display: flex;
  align-items: center;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  gap: ${({ $hasStatusIcon }) => ($hasStatusIcon ? "12px" : "0")};

  width: ${({ $hasStatusIcon }) => ($hasStatusIcon ? "auto" : "20px")};
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  right: 20px;
`;
