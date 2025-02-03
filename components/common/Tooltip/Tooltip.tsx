"use client";

import { Typography } from "@/components/atoms/Typography";
import { TooltipPosition } from "@/constants/TooltipPositions";
import * as S from "./Tooltip.style";

interface TooltipProps {
  text: string;
  position: TooltipPosition;
  left?: number; // px 단위 left 좌표
}

export default function Tooltip({ text, position, left }: TooltipProps) {
  return (
    <S.TooltipContainer position={position} $left={left}>
      <Typography.H7Sb>{text}</Typography.H7Sb>
    </S.TooltipContainer>
  );
}
