"use client";

import Header from "@/components/common/Header/Header";
import Frame from "@/components/layout/Frame";
import Tab from "@/components/common/Tab/Tab";
import NotificationBanner from "../../home/_components/NotificationBanner/NotificationBanner";
import * as S from "../style";
import MateCard from "./MateCard";
import React, { useState, useEffect } from 'react';
import MateProfile from "./MateProfile";

export default function Page() {
  const tabItems = ["챌린지", "기록"];

  const [isMatePage, setIsMatePage] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setIsMatePage(currentPath === "/challenge/mate");
  }, []); 

  return (
    <Frame>
      <Header isChallenge={true} />
      <Tab tabs={tabItems} />

      <S.PageContainer $bgColorGray={true}>
        <S.MainContent>
          <NotificationBanner isChallenge={true} />
        </S.MainContent>
        <S.SubContent>
          <S.Search2Container $isMatePage={isMatePage}>
            {isMatePage && <MateProfile />}
            {isMatePage && <MateCard />}
          </S.Search2Container>
          <S.Search2Container $isMatePage={isMatePage}>
            {isMatePage && <MateProfile />}
            {isMatePage && <MateCard />}
          </S.Search2Container>
          <S.Search2Container $isMatePage={isMatePage}>
            {isMatePage && <MateProfile />}
            {isMatePage && <MateCard />}
          </S.Search2Container>
        </S.SubContent>
      </S.PageContainer>
    </Frame>
  );
}
