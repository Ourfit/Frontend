"use client";

import Header from "@/components/common/Header/Header";
import Frame from "@/components/layout/Frame";
import Banner from "./_component/Banner/Banner";
import QuickMenuBar from "./_component/QuickMenuBar/QuickMenuBar";
import NotificationBanner from "./_component/NotificationBanner/NotificationBanner";
import UserSection from "./_component/UserSection/UserSection";
import * as S from "./style";

export default function Home() {
  return (
    <Frame>
      <Header />
      <S.PageContainer>
        <Banner />
        <S.MainContent>
          <QuickMenuBar />
          <NotificationBanner />
          <UserSection />
        </S.MainContent>
      </S.PageContainer>
    </Frame>
  );
}
