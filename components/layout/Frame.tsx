import Header from "@/components/common/Header";
import Tooltip from "@/components/common/Tooltip/Tooltip";
import { TOOLTIP_POSITIONS } from "@/constants/TooltipPositions";
import React from "react";
import * as S from "./Frame.style";

interface FrameProps {
  children: React.ReactNode;
}

export default function Frame({ children }: Readonly<FrameProps>) {
  return (
    <S.FrameContainer>
      <Tooltip text="supporting text" position={TOOLTIP_POSITIONS.TOP_LEFT} />
      <Header />
      <S.Content>{children}</S.Content>
    </S.FrameContainer>
  );
}
