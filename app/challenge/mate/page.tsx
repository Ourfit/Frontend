"use client";

import Header from "@/components/common/Header/Header";
import Frame from "@/components/layout/Frame";
import Tab from "@/components/common/Tab/Tab";
import NotificationBanner from "../notificationBanner/NotificationBanner";
import * as S from "../style";
import MateCard from "./Card/MateCard";
import React, { useState, useEffect } from "react";
import MateProfile from "./Profile/MateProfile";

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
    setIsMatePage(currentPath === "/challenge/mate");
  }, []);

  return (
    <Frame>
      <Header isChallenge={true} />
      <Tab tabs={tabItems} onClick={handleTabChange} />

      <S.PageContainer $bgColorGray={true}>
        <S.MainContent>
          {selectedTab === "챌린지" && (
            <NotificationBanner isChallenge={true} />
          )}
          {selectedTab === "기록" && <NotificationBanner isChallenge={true} />}
        </S.MainContent>
        {selectedTab === "챌린지" && (
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
        )}
      </S.PageContainer>
    </Frame>
  );
}
