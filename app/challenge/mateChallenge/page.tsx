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
import { CALENDAR_BADGE as BADGE, CalendarBadge } from "@/constants/Calendar";
import * as S from "../style";
import { dateFormat } from "@/utils/monthList";

export default function Page() {
  const tabItems = ["챌린지", "기록"];
  const [selectedTab, setSelectedTab] = useState(tabItems[0]);
  const [isMatePage, setIsMatePage] = useState(false);
  const [calendarData, setCalendarData] = useState<{
    [key: string]: CalendarBadge;
  } | null>(null);

  const todayStatus = calendarData && calendarData[dateFormat(new Date())];

  const handleTabChange = (tab: string) => {
    console.log(`Tab: ${tab}`);
    setSelectedTab(tab);
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    setIsMatePage(currentPath === "/challenge/mateChallenge");
  }, []);

  useEffect(() => {
    if (selectedTab === "기록") {
      const dateList: { [key: string]: CalendarBadge } = {
        "2025-02-03": BADGE.COMPLETE,
        "2025-02-05": BADGE.COMPLETE,
        "2025-02-07": BADGE.FAIL,
        "2025-02-10": BADGE.FAIL,
        "2025-02-12": BADGE.EXPECTED,
        "2025-02-14": BADGE.COMPLETE,
        "2025-02-17": BADGE.FAIL,
        "2025-02-19": BADGE.COMPLETE,
        "2025-02-21": BADGE.COMPLETE,
        "2025-02-24": BADGE.EXPECTED,
        "2025-02-26": BADGE.EXPECTED,
        "2025-02-28": BADGE.EXPECTED,
        "2025-03-02": BADGE.EXPECTED,
        "2025-03-08": BADGE.EXPECTED,
      };

      setCalendarData(dateList);
    }
  }, [selectedTab]);

  return (
    <Frame>
      <Header isChallenge={true} />
      <Tab tabs={tabItems} onClick={handleTabChange} />

      <S.PageContainer $bgColorGray={true}>
        <S.MainContent $paddingBottom={selectedTab === "챌린지" ? "0" : "24px"}>
          {selectedTab === "기록" && (
            <NotificationBanner
              isChallenge={false}
              todayStatus={todayStatus}
              setCalendarData={setCalendarData}
            />
          )}
          {selectedTab === "챌린지" && (
            <NotificationBanner isChallenge={true} />
          )}
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
              data={calendarData}
            />
          </>
        )}
      </S.PageContainer>
    </Frame>
  );
}
