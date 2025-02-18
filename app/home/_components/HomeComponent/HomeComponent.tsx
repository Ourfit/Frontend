"use client";

import styled from "styled-components";
import Banner from "../Banner/Banner";
import QuickMenuBar from "../QuickMenuBar/QuickMenuBar";
import NotificationBanner from "../NotificationBanner/NotificationBanner";
import UserSection from "../UserSection/UserSection";
import Header from "@/components/common/Header/Header";
import { User } from "@/types/user";

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
  // const { data: user } = useQuery({
  //   queryKey: ["me"],
  //   queryFn: () => getUserMe(),
  // });

  const user: User = {
    id: 1,
    profileUrl: "https://example.com/profile.jpg",
    nickname: "닉네임입니다",
    gender: "F",
    skillLevel: "BEGINNER",
    introduction: "안녕하세요. 자기소개입니다.",
    preferredWorkoutTime: ["WEEKDAY_MORNING"],
    favoriteWorkouts: [
      {
        code: "GYM",
        name: "헬스",
      },
    ],
    favoritePlaces: [
      {
        placeName: "에이블짐 잠실점",
        address: "서울특별시 송파구 올림픽로35가길 11 지하1층 001호",
      },
    ],
    createdAt: "2025-02-01T15:33:30",
    nicknameUpdatedAt: "2025-02-05T12:21:30",
  };

  return (
    <>
      <Header />
      <PageContainer>
        <Banner />
        <MainContent>
          <QuickMenuBar />
          <NotificationBanner />
          <UserSection
            nickname={user.nickname}
            favoriteWorkouts={user.favoriteWorkouts}
            preferredWorkoutTime={user.preferredWorkoutTime}
          />
        </MainContent>
      </PageContainer>
    </>
  );
}
