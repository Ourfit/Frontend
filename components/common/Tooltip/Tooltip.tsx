"use client";

import { Typography } from "@/components/atoms/Typography";
import * as S from "./Tooltip.style";

interface TooltipProps {
  text: string;
  position: "top" | "bottom" | "top-left" | "top-right" | "left" | "right";
}

export default function Tooltip({ text, position }: TooltipProps) {
  return (
    <S.TooltipContainer position={position}>
      <Typography.H6Sb>{text}</Typography.H6Sb>
    </S.TooltipContainer>
  );
}
