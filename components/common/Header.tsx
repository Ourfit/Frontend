"use client";

import * as OverlayS from "@/components/common/Overlay.style";
import { useState } from "react";
import * as S from "./Header.style";
import { Typography } from "@/components/atoms/Typography";
import { theme } from "@/styles/theme";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <S.HeaderContainer onClick={() => setIsModalOpen(true)}>
        <Typography.H3Bd color={theme.colors.base.white}>
          헤더 타이틀
        </Typography.H3Bd>
      </S.HeaderContainer>
      {isModalOpen && (
        <OverlayS.Overlay
          onClick={() => setIsModalOpen(false)}
        ></OverlayS.Overlay>
      )}
    </>
  );
}
