"use client";

import * as OverlayS from "@/components/common/Overlay.style";
import { useState } from "react";
import * as S from "./Header.style";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <S.HeaderContainer onClick={() => setIsModalOpen(true)}>
        <S.HeaderTitle>헤더 타이틀</S.HeaderTitle>
      </S.HeaderContainer>
      {isModalOpen && (
        <OverlayS.Overlay
          onClick={() => setIsModalOpen(false)}
        ></OverlayS.Overlay>
      )}
    </>
  );
}
