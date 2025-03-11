"use client";

import Header from "@/components/common/Header/Header";
import Frame from "@/components/layout/Frame";
import NotificationBanner from "@/components/NotificationBanner/NotificationBanner";
import { COLORS } from "@/constants/Theme";
import { getMypageInfo } from "@/services/mypage/getMypageInfo";
import { useOAuthIdStore } from "@/stores/oAuthIdStore";
import { useTokenStore } from "@/stores/tokenStore";
import { useUserInfoStore } from "@/stores/userInfoStore";
import { User } from "@/types/user";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styled from "styled-components";
import Banner from "../Banner/Banner";
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
  gap: 32px;
  padding-top: 24px;
  padding-bottom: 64px;
`;

export default function HomeComponent() {
  const { token } = useTokenStore();
  const router = useRouter();
  const { clearOAuthId } = useOAuthIdStore.getState();
  const { fetchUserInfo } = useUserInfoStore.getState();

  const {
    data: user,
    isLoading,
    isSuccess,
  } = useQuery<User>({
    queryKey: ["myPageInfo"],
    queryFn: () => getMypageInfo(),
    staleTime: 5 * 60 * 1000,
    enabled: !!token,
  });

  //tanstack-query 호출된 후 스토어에 동기화 되지 않아서 동기화 처리
  //리액트쿼리 정상 작동되면 스토어, 로컬 스토리지에 동기화 되도록 저장
  useEffect(() => {
    if (isSuccess && user) {
      fetchUserInfo();
    }
  }, [isSuccess, user, fetchUserInfo]);

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
    favoriteWorkouts = [
      {
        code: "",
        name: "",
      },
    ],
    preferredWorkoutTime = "WEEKDAY_MORNING",
  } = isLoading || !user ? {} : user;

  return (
    <Frame contentStyle={{ backgroundColor: COLORS.GRAYSCALE_100 }}>
      <Header region={`${region2} ${region3}`} />
      <PageContainer>
        <Banner />
        <MainContent>
          <QuickMenuBar />
          <NotificationBanner isHome />
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
