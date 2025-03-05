"use client";

import Header from "@/components/common/Header/Header";
import Frame from "@/components/layout/Frame";
import Tab from "@/components/common/Tab/Tab";
import React, { useState } from "react";
import * as S from "./style";
import NotificationBanner from "@/components/NotificationBanner/NotificationBanner";
import MateCard from "./_components/MateCard/MateCard";
import EmptyComponent from "./_components/EmptyComponet/EmptyComponent";
import { useRouter } from "next/navigation";

export default function Page() {
  const tabItems = ["챌린지", "기록"];
  const [selectedTab, setSelectedTab] = useState(tabItems[0]);

  const router = useRouter();

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  const mates = [
    {
      nickname: "중수다람쥐",
      gender: "여",
      age: 27,
      leve: "운동초보",
    },
    {
      nickname: "중수다람쥐",
      gender: "여",
      age: 27,
      leve: "운동초보",
    },
    {
      nickname: "중수다람쥐",
      gender: "여",
      age: 27,
      leve: "운동초보",
    },
  ];

  return (
    <Frame>
      <Header />
      <Tab tabs={tabItems} onClick={handleTabChange} />

      <S.PageContainer $bgColorGray={true}>
        <NotificationBanner isChallenge={true} />
        {selectedTab === "챌린지" && (
          <S.MateContent>
            {mates.length ? (
              <S.MateList>
                {mates.map((mate, i) => (
                  <MateCard key={i} />
                ))}
              </S.MateList>
            ) : (
              <EmptyComponent
                title="아직 메이트가 없어요!"
                buttonContent="메이트 찾기"
                onClick={() => router.push("/mate/explore")}
              />
            )}
          </S.MateContent>
        )}
      </S.PageContainer>
    </Frame>
  );
}
