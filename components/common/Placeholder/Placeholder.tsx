"use client";

import Search from "@/assets/images/search.svg";
import { COLORS } from "@/constants/Theme";
import { useState } from "react";
import * as S from "./Placeholder.style";

interface PlaceholderProps {
  text: string;
  inputValue: string;
  setInputValue?: React.Dispatch<React.SetStateAction<string>>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  style?: React.CSSProperties;
  showLength?: boolean;
}

export default function Placeholder({
  text,
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
      setInputValue?.(e.target.value);
      onChange?.(e);
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
    </S.Wrapper>
  );
}
