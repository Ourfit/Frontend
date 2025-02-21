"use client";

import Frame from "@/components/layout/Frame";
import Banner from "../Banner/Banner";
import NotificationBanner from "../NotificationBanner/NotificationBanner";
import QuickMenuBar from "../QuickMenuBar/QuickMenuBar";
import UserSection from "../UserSection/UserSection";
import styled from "styled-components";
import Header from "@/components/common/Header/Header";
import { COLORS } from "@/constants/Theme";
import { useTokenStore } from "@/stores/tokenStore";

const PageContainer = styled.div`
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding-top: 24px;
  padding-bottom: 64px;
`;

export default function HomeComponent() {
  const { token } = useTokenStore();

  if (token) {
    return (
      <Frame contentStyle={{ backgroundColor: COLORS.GRAYSCALE_100 }}>
        <Header />
        <PageContainer>
          <Banner />
          <MainContent>
            <QuickMenuBar />
            <NotificationBanner />
            <UserSection />
          </MainContent>
        </PageContainer>
      </Frame>
    );
  } else {
    window.location.replace("/auth/login");
  }
}
