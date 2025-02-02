"use client";

import Header from "@/components/common/Header/Header";
import Frame from "@/components/layout/Frame";
import Tab from "@/components/common/Tab/Tab";
import MateProfile from "../mate/Profile/MateProfile";
import NotificationBanner from "../notificationBanner/NotificationBanner";
import { MateChallengeCard } from "./Card/MateChallengeCard";
import { MateChallengeCard2 } from "./Card/MateChallengeCard2";
import { MateChallengeCard3 } from "./Card/MateChallengeCard3";
import { ChallengeCalendar } from "../record/ChallengeCalendar";
import React, { useState, useEffect } from "react";
import * as S from "../style";

export default function Page() {
  const tabItems = ["챌린지", "기록"];
  const [selectedTab, setSelectedTab] = useState(tabItems[0]);
  const handleTabChange = (tab: string) => {
    console.log(`Tab: ${tab}`);
    setSelectedTab(tab);
  };

  const [isMatePage, setIsMatePage] = useState(false);
  const handleSelectionChange = (date: Date | null) => {};

  useEffect(() => {
    const currentPath = window.location.pathname;
    setIsMatePage(currentPath === "/challenge/mateChallenge");
  }, []);

  return (
    <Frame>
      <Header isChallenge={true} />
      <Tab tabs={tabItems} onClick={handleTabChange} />

      <S.PageContainer $bgColorGray={true}>
        <S.MainContent>
          {selectedTab === "기록" && <NotificationBanner isChallenge={false} />}
          {selectedTab === "챌린지" && <NotificationBanner isChallenge={true} />}
        </S.MainContent>

        {selectedTab === "챌린지" && (
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
        )}

        {selectedTab === "기록" && (
          <>
            <ChallengeCalendar
              onNext={() => console.log("다음")}
              onSelectionChange={handleSelectionChange}
            />
          </>
        )}
      </S.PageContainer>
    </Frame>
  );
}
