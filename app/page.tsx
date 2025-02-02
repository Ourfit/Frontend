"use client";

import Header from "@/components/common/Header/Header";
import Frame from "@/components/layout/Frame";
import Banner from "./home/_components/Banner/Banner";
import QuickMenuBar from "./home/_components/QuickMenuBar/QuickMenuBar";
import NotificationBanner from "./home/_components/NotificationBanner/NotificationBanner";
import UserSection from "./home/_components/UserSection/UserSection";
import * as S from "./style";
import { COLORS } from "@/constants/Theme";

export default function Home() {
  return (
    <Frame contentStyle={{ backgroundColor: COLORS.GRAYSCALE_100 }}>
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
