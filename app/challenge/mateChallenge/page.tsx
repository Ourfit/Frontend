"use client";

import Header from "@/components/common/Header/Header";
import Frame from "@/components/layout/Frame";
import Tab from "@/components/common/Tab/Tab";
import NotificationBanner from "../../home/_components/NotificationBanner/NotificationBanner";
import { MateChallengeCard } from "./MateChallengeCard";
import MateProfile from "../mate/MateProfile"
import React, { useState, useEffect } from 'react';
import * as S from "../style";
import { MateChallengeCard2 } from "./MateChallengeCard2";
import { MateChallengeCard3 } from "./MateChallengeCard3";

export default function Page() {
  const tabItems = ["챌린지", "기록"];

  const [isMatePage, setIsMatePage] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setIsMatePage(currentPath === "/challenge/mateChallenge");
  }, []); 

  return (
    <Frame>
      <Header isChallenge={true} />
      <Tab tabs={tabItems} />

      <S.PageContainer $bgColorGray={true}>
        <S.MainContent>
          <NotificationBanner isChallenge={true} />
        </S.MainContent>
        <S.SubContent2>
          <S.MateChallengeContainer $isMatePage={isMatePage}>
            {isMatePage && <MateProfile />}
            {isMatePage && <MateChallengeCard />}
          </S.MateChallengeContainer>
          <S.MateChallengeContainer $isMatePage={isMatePage}>
            {isMatePage && <MateProfile />}
            {isMatePage && <MateChallengeCard2 />}
          </S.MateChallengeContainer>
          <S.MateChallengeContainer $isMatePage={isMatePage}>
            {isMatePage && <MateProfile />}
            {isMatePage && <MateChallengeCard3 />}
          </S.MateChallengeContainer>
        </S.SubContent2>
      </S.PageContainer>
    </Frame>
  );
}
