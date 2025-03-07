"use client";

import Header from "@/components/common/Header/Header";
import Frame from "@/components/layout/Frame";
import Tab from "@/components/common/Tab/Tab";
import React, { useState } from "react";
import * as S from "./style";
import ChallengeState from "./_components/ChallengeState/ChallengeState";
import ChallengeRecord from "./_components/ChallengeRecord/ChallegeRecord";

export default function Page() {
  const tabItems = ["챌린지", "기록"];
  const [selectedTab, setSelectedTab] = useState(tabItems[0]);

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <Frame>
      <Header />
      <Tab tabs={tabItems} activeTab={selectedTab} onClick={handleTabChange} />

      <S.PageContainer $bgColorGray={true}>
        {selectedTab === "챌린지" ? <ChallengeState /> : <ChallengeRecord />}
      </S.PageContainer>
    </Frame>
  );
}
