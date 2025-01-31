"use client";

import Header from "@/components/common/Header/Header";
import Frame from "@/components/layout/Frame";
import Tab from "@/components/common/Tab/Tab";
import NotificationBanner from "../home/_components/NotificationBanner/NotificationBanner";
import MateSearch from "./mate/MateSearch";
import * as S from "./style";

export default function Page() {
  const tabItems = ["챌린지", "기록"];

  return (
    <Frame>
      <Header isChallenge={true} />
      <Tab tabs={tabItems} />

      <S.PageContainer $bgColorGray={true}>
        <S.MainContent>
          <NotificationBanner isChallenge={true} />
        </S.MainContent>
        <S.SubContent>
          <S.SearchContainer>
            <MateSearch />
          </S.SearchContainer>
        </S.SubContent>
      </S.PageContainer>
    </Frame>
  );
}
