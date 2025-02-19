"use client";

import Banner from "../Banner/Banner";
import NotificationBanner from "../NotificationBanner/NotificationBanner";
import QuickMenuBar from "../QuickMenuBar/QuickMenuBar";
import UserSection from "../UserSection/UserSection";
import styled from "styled-components";

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
  return (
    <PageContainer>
      <Banner />
      <MainContent>
        <QuickMenuBar />
        <NotificationBanner />
        <UserSection />
      </MainContent>
    </PageContainer>
  );
}
