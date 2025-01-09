"use client";

import { useState } from "react";
import * as S from "./SelectBar.style";
import ArrowDown from "@/assets/images/arrow-down2.svg";
import { COLORS } from "@/constants/Theme";
import { Typography } from "@/components/atoms/Typography";

export default function SelectBar({ selectType }: { selectType: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(1);
  const options =
    selectType === "month"
      ? Array.from({ length: 12 }, (_, i) => i + 1)
      : Array.from({ length: 99 }, (_, i) => i + 1);

  const handleOptionClick = (option: number) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <S.SelectWrapper>
      <S.SelectBox $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <Typography.H4Md>
          {selectedOption}
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
