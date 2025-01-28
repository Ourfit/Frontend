"use client";

import Search from "@/assets/images/search.svg";
import { COLORS } from "@/constants/Theme";
import { useState } from "react";
import * as S from "./Placeholder.style";

interface PlaceholderProps {
  text: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export default function Placeholder({
  text,
  onChange,
  value,
}: PlaceholderProps) {
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 24) {
      setInputValue(e.target.value);
      onChange?.(e);
    }
  };

  return (
    <S.Wrapper $isInputFocus={isInputFocus}>
      <Search stroke={COLORS.GRAYSCALE_700} width="24" height="24" />

      <S.InputBox
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={text}
        onFocus={() => setIsInputFocus(true)}
        onBlur={() => setIsInputFocus(false)}
      />
    </S.Wrapper>
  );
}
