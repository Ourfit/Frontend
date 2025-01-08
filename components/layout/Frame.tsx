"use client";

import Gnb from "@/components/common/Gnb";
import Header from "@/components/common/Header/Header";
import Input from "@/components/common/Input/Input";
import Toast from "@/components/common/Toast/Toast";
import Tooltip from "@/components/common/Tooltip/Tooltip";
import { TOAST_MESSAGES, TOAST_STATUSES } from "@/constants/Toast";
import { TOOLTIP_POSITIONS } from "@/constants/TooltipPositions";
import React, { useEffect, useState } from "react";
import * as S from "./Frame.style";

interface FrameProps {
  children: React.ReactNode;
}

export default function Frame({ children }: Readonly<FrameProps>) {
  const [isToastVisible, setToastVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setToastVisible(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <S.FrameContainer>
      <Tooltip text="supporting text" position={TOOLTIP_POSITIONS.TOP_LEFT} />
      <Header />
      {isToastVisible && (
        <Toast message={TOAST_MESSAGES.ERROR} status={TOAST_STATUSES.ERROR} />
      )}
      <Input />
      <S.Content>{children}</S.Content>
      <Gnb />
    </S.FrameContainer>
  );
}
