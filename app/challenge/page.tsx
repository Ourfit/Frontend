"use client";

import Header from "@/components/common/Header/Header";
import Frame from "@/components/layout/Frame";
import Tab from "@/components/common/Tab/Tab";
import NotificationBanner from "./notificationBanner/NotificationBanner";
import MateSearch from "./mate/MateSearch";
import React, { useState } from "react";
import * as S from "./style";

export default function Page() {
  const tabItems = ["챌린지", "기록"];
  const [selectedTab, setSelectedTab] = useState(tabItems[0]);
  const handleTabChange = (tab: string) => {
    console.log(`Tab: ${tab}`);
    setSelectedTab(tab);
  };

  const handleSelectionChange = (date: Date | null) => {};

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
            <S.SearchContainer>
              <MateSearch />
            </S.SearchContainer>
          </S.SubContent>
        )}
      </S.PageContainer>
    </Frame>
  );
}
