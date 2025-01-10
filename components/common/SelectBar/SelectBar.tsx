"use client";

import { useState } from "react";
import * as S from "./SelectBar.style";
import ArrowDown from "@/assets/images/arrow-down2.svg";
import { COLORS } from "@/constants/Theme";
import { Typography } from "@/components/atoms/Typography";

export default function SelectBar({
  selectType,
  setOption,
  optionValue,
}: {
  selectType: string;
  setOption: React.Dispatch<React.SetStateAction<number>>;
  optionValue: string | number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const options =
    selectType === "month"
      ? Array.from({ length: 12 }, (_, i) => i + 1)
      : Array.from({ length: 69 - 15 + 1 }, (_, i) => i + 15);

  const handleOptionClick = (option: number) => {
    setOption(option);
    setIsOpen(false);
  };

  return (
    <S.SelectWrapper>
      <S.SelectBox $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <Typography.H4Md>
          {optionValue}
          {selectType === "month" ? "개월" : "세"}
        </Typography.H4Md>
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
