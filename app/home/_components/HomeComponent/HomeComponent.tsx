"use client";

import Header from "@/components/common/Header/Header";
import Frame from "@/components/layout/Frame";
import { COLORS } from "@/constants/Theme";
import { useOAuthIdStore } from "@/stores/oAuthIdStore";
import { useTokenStore } from "@/stores/tokenStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styled from "styled-components";
import Banner from "../Banner/Banner";
import NotificationBanner from "../NotificationBanner/NotificationBanner";
import QuickMenuBar from "../QuickMenuBar/QuickMenuBar";
import UserSection from "../UserSection/UserSection";

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
  const router = useRouter();
  const { clearOAuthId } = useOAuthIdStore.getState();

  useEffect(() => {
    if (!token) {
      router.replace("/auth/login");
    } else clearOAuthId();
  }, [token]);

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
}
