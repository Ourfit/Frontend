"use client";

import {
  INPUT_STATUS,
  INPUT_STATUS_ICONS,
  InputStatus,
} from "@/constants/InputStatus";
import React from "react";
import * as S from "./Input.style";

interface InputProps {
  value: string;
  deferredValue: string;
  placeholder: string;
  status: InputStatus;
  isTyping: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  onClear: () => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function Input({
  value,
  deferredValue,
  placeholder,
  status,
  isTyping,
  onChange,
  onBlur,
  onClear,
  onKeyPress,
}: InputProps) {
  const StatusIconComponent = INPUT_STATUS_ICONS[status];

  return (
    <S.InputContainer>
      <S.StyledInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyPress}
        $status={status}
      />
      {status !== INPUT_STATUS.DEFAULT && (
        <S.IconsContainer
          $hasStatusIcon={status !== ("default" as InputStatus)}
        >
          {isTyping && (
            <S.Icon onClick={onClear}>
              {INPUT_STATUS_ICONS.typing && (
                <INPUT_STATUS_ICONS.typing width="20" height="20" />
              )}
            </S.Icon>
          )}
          {!isTyping && deferredValue.trim() !== "" && (
            <>
              {StatusIconComponent && (
                <S.Icon>
                  <StatusIconComponent width="20" height="20" />
                </S.Icon>
              )}
            </>
          )}
        </S.IconsContainer>
      )}
    </S.InputContainer>
  );
}
