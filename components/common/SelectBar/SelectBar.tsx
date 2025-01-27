"use client";

import ArrowDown from "@/assets/images/arrow-down2.svg";
import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import { useState } from "react";
import * as S from "./SelectBar.style";

export default function SelectBar({
  selectType,
  setOption,
  optionValue,
  width,
  hasSuffix = false,
  suffixText,
}: {
  selectType: string;
  setOption: React.Dispatch<React.SetStateAction<string>>;
  optionValue: string | number;
  width: string;
  hasSuffix?: boolean;
  suffixText?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const options =
    selectType === "month"
      ? Array.from({ length: 12 }, (_, i) => `${i + 1}개월`)
      : selectType === "age"
        ? Array.from({ length: 55 }, (_, i) => `${15 + i}세`)
        : selectType === "ampm"
          ? ["오전", "오후"]
          : selectType === "hour"
            ? Array.from(
                { length: 24 },
                (_, i) => `${i.toString().padStart(2, "0")}시`,
              )
            : [];

  const handleOptionClick = (option: string) => {
    setOption(option);
    setIsOpen(false);
  };

  return (
    <S.SelectWrapper>
      <S.SelectBox
        $isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        width={width}
      >
        <div style={{ width: "73px" }}>
          <Typography.H4Md>{optionValue}</Typography.H4Md>
        </div>
        {hasSuffix && suffixText && (
          <Typography.H4Md color="#545862">{suffixText}</Typography.H4Md>
        )}
        <ArrowDown stroke={COLORS.GRAYSCALE_500} />
      </S.SelectBox>
      <S.SelectOptions $isOpen={isOpen}>
        {options.map((option, index) => (
          <S.OptionItem key={index} onClick={() => handleOptionClick(option)}>
            <Typography.H4Md>{option}</Typography.H4Md>
          </S.OptionItem>
        ))}
      </S.SelectOptions>
    </S.SelectWrapper>
  );
}
