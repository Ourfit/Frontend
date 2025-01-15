"use client";

import Gnb from "@/components/common/Gnb";
import Header from "@/components/common/Header/Header";
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
      <Header />
      <S.Content>{children}</S.Content>
      <Gnb />
    </S.FrameContainer>
  );
}
