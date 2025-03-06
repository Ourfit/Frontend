"use client";

import Frame from "@/components/layout/Frame";
import Banner from "../Banner/Banner";
import QuickMenuBar from "../QuickMenuBar/QuickMenuBar";
import UserSection from "../UserSection/UserSection";
import styled from "styled-components";
import Header from "@/components/common/Header/Header";
import { COLORS } from "@/constants/Theme";
import { useOAuthIdStore } from "@/stores/oAuthIdStore";
import { useTokenStore } from "@/stores/tokenStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import getUserMe from "@/services/getUserMe";
import { useQuery } from "@tanstack/react-query";
import NotificationBanner from "@/components/NotificationBanner/NotificationBanner";

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

  const { data: user, isLoading } = useQuery({
    queryKey: ["userMe"],
    queryFn: () => getUserMe(),
    staleTime: 5 * 60 * 1000,
    enabled: !!token,
  });

  useEffect(() => {
    const accessToken = useTokenStore.getState().token;

    if (!accessToken) {
      router.replace("/auth/login");
    } else {
      clearOAuthId();
    }
  }, []);

  if (!token) return null;

  const {
    region2 = "",
    region3 = "",
    nickname = "",
    favoriteWorkouts = "",
    preferredWorkoutTime = "",
  } = isLoading || !user?.data ? {} : user.data;

  return (
    <Frame contentStyle={{ backgroundColor: COLORS.GRAYSCALE_100 }}>
      <Header region={`${region2} ${region3}`} />
      <PageContainer>
        <Banner />
        <MainContent>
          <QuickMenuBar />
          <NotificationBanner />
          <UserSection
            nickname={nickname}
            region={region3}
            favoriteWorkouts={favoriteWorkouts}
            preferredWorkoutTime={preferredWorkoutTime}
          />
        </MainContent>
      </PageContainer>
    </Frame>
  );
}
