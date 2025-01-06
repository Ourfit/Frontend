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
      <Typography.H6Sb>{text}</Typography.H6Sb>
    </S.TooltipContainer>
  );
}
