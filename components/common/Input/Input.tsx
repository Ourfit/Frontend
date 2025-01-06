"use client";

import {
  INPUT_STATUS,
  INPUT_STATUS_ICONS,
  InputStatus,
} from "@/constants/InputStatus";
import React, { useState } from "react";
import * as S from "./Input.style";

export default function Input() {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<InputStatus>(INPUT_STATUS.DEFAULT);
  const [isTyping, setIsTyping] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    if (inputValue.trim().length === 0) {
      setStatus(INPUT_STATUS.DEFAULT);
    } else {
      setIsTyping(true);
      setStatus(INPUT_STATUS.TYPING);

      setTimeout(() => {
        setIsTyping(false);
        if (inputValue === "error") {
          setStatus(INPUT_STATUS.ERROR);
        } else {
          setStatus(INPUT_STATUS.COMPLETE);
        }
      }, 1000);
    }
  };

  const handleBlur = () => {
    setStatus(INPUT_STATUS.DEFAULT);
  };

  const handleClear = () => {
    setValue("");
    setStatus(INPUT_STATUS.DEFAULT);
    setIsTyping(false);
  };

  const StatusIconComponent = INPUT_STATUS_ICONS[status];

  return (
    <S.InputContainer>
      <S.StyledInput
        placeholder="Input text"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        $status={status}
      />

      {status !== INPUT_STATUS.DEFAULT && (
        <S.IconsContainer
          $hasStatusIcon={status !== ("default" as InputStatus)}
        >
          <S.Icon onClick={handleClear}>
            {INPUT_STATUS_ICONS.typing && (
              <INPUT_STATUS_ICONS.typing width="20" height="20" />
            )}
          </S.Icon>

          {!isTyping && StatusIconComponent && (
            <S.Icon>
              <StatusIconComponent width="20" height="20" />
            </S.Icon>
          )}
        </S.IconsContainer>
      )}
    </S.InputContainer>
  );
}
