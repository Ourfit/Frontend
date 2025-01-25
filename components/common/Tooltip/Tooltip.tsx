"use client";

import { Typography } from "@/components/atoms/Typography";
import { TooltipPosition } from "@/constants/TooltipPositions";
import * as S from "./Tooltip.style";

interface TooltipProps {
  text: string;
  position: TooltipPosition;
}

export default function Tooltip({ text, position }: TooltipProps) {
  return (
    <S.TooltipContainer position={position}>
      <Typography.H7Sb>{text}</Typography.H7Sb>
    </S.TooltipContainer>
  );
}
