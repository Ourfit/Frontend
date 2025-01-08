"use client";

import * as S from "./Placeholder.style";
import Search from "@/assets/images/search.svg";
import { COLORS } from "@/constants/Theme";
import { useState } from "react";

export default function Placeholder() {
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <S.Wrapper $isInputFocus={isInputFocus}>
      <Search stroke={COLORS.GRAYSCALE_700} />
      <S.InputBox
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        maxLength={24}
        placeholder="text"
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
