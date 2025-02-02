"use client";

import * as S from "./Placeholder.style";
import Search from "@/assets/images/search.svg";
import { COLORS } from "@/constants/Theme";
import { useState } from "react";

interface PlaceholderProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  style?: React.CSSProperties;
  showLength?: boolean;
}

export default function Placeholder({
  inputValue,
  setInputValue,
  onChange,
  placeholder,
  style,
  showLength = true,
}: PlaceholderProps) {
  const [isInputFocus, setIsInputFocus] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 24) {
      setInputValue(e.target.value);
    }
  };

  return (
    <S.Wrapper $isInputFocus={isInputFocus} style={{ ...style }}>
      <Search stroke={COLORS.GRAYSCALE_700} />
      <S.InputBox
        type="text"
        value={inputValue}
        onChange={onChange ? onChange : handleInputChange}
        placeholder={placeholder}
        onFocus={() => setIsInputFocus(true)}
        onBlur={() => setIsInputFocus(false)}
      />
      {showLength && (
        <S.InputLength>
          <span style={{ color: COLORS.BLUE_500 }}>{inputValue.length}</span>
          <span style={{ color: COLORS.GRAYSCALE_500 }}>/24</span>
        </S.InputLength>
      )}
    </S.Wrapper>
  );
}
