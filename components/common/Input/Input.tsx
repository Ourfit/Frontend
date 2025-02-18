"use client";

import {
  INPUT_STATUS,
  INPUT_STATUS_ICONS,
  InputStatus,
} from "@/constants/InputStatus";
import React, { useRef, useState } from "react";
import * as S from "./Input.style";

interface InputProps {
  value: string;
  deferredValue: string;
  placeholder: string;
  status: InputStatus;
  isTyping: boolean;
  isLoading?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  onClear: () => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputStyle?: React.CSSProperties;
  borderColor?: boolean;
}

export default function Input({
  value,
  deferredValue,
  placeholder,
  status,
  isLoading,
  onChange,
  onBlur,
  onClear,
  onKeyPress,
  inputStyle,
  borderColor,
}: InputProps) {
  const StatusIconComponent = INPUT_STATUS_ICONS[status];
  const [isInputFocus, setIsInputFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    onClear();
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const getStatusIcon = () => {
    if (isLoading) {
      return (
        <S.Icon>
          {INPUT_STATUS_ICONS.loading && (
            <INPUT_STATUS_ICONS.loading width="16" height="16" />
          )}
        </S.Icon>
      );
    }

    if (deferredValue.trim() !== "") {
      return (
        <S.Icon onClick={handleClear} $cursor="pointer">
          {INPUT_STATUS_ICONS.typing && (
            <INPUT_STATUS_ICONS.typing width="20" height="20" />
          )}
        </S.Icon>
      );
    }

    if (!isInputFocus && deferredValue.trim() !== "") {
      return (
        <>
          <S.Icon onClick={onClear} $cursor="pointer">
            {INPUT_STATUS_ICONS.typing && (
              <INPUT_STATUS_ICONS.typing width="20" height="20" />
            )}
          </S.Icon>
          {StatusIconComponent && (
            <S.Icon>
              <StatusIconComponent width="20" height="20" />
            </S.Icon>
          )}
        </>
      );
    }
  };

  return (
    <S.InputContainer>
      <S.StyledInput
        ref={inputRef}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={() => {
          setIsInputFocus(false);
          onBlur();
        }}
        onKeyDown={onKeyPress}
        onFocus={() => setIsInputFocus(true)}
        $status={status}
        style={{ ...inputStyle }}
        $borderColor={borderColor}
        $isInputFocus={isInputFocus}
      />
      {status !== INPUT_STATUS.DEFAULT && (
        <S.IconsContainer
          $hasStatusIcon={status !== ("default" as InputStatus)}
        >
          {getStatusIcon()}
        </S.IconsContainer>
      )}
    </S.InputContainer>
  );
}
