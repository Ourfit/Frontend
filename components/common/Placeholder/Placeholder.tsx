"use client";

import Search from "@/assets/images/search.svg";
import { COLORS } from "@/constants/Theme";
import { useState } from "react";
import * as S from "./Placeholder.style";

interface PlaceholderProps {
  text: string;
}

export default function Placeholder({ text }: PlaceholderProps) {
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 24) {
      setInputValue(e.target.value);
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
      <S.InputLength>
        <span style={{ color: COLORS.BLUE_500 }}>{inputValue.length}</span>
        <span style={{ color: COLORS.GRAYSCALE_500 }}>/24</span>
      </S.InputLength>
    </S.Wrapper>
  );
}
