"use client";

import { Typography } from "@/components/atoms/Typography";
import Header from "@/components/common/Header/Header";
import Frame from "@/components/layout/Frame";
import * as S from "./style";
import NotificationList from "./_components/NotificationList";

export default function NotificationsPage() {
  const TodayList = [
    {
      id: 1,
      type: "request",
      name: "중수다람쥐",
    },
    {
      id: 2,
      type: "accept",
      name: "중수다람쥐",
    },
  ];

  const PrevList = [
    {
      id: 3,
      type: "request",
      name: "중수다람쥐",
    },
    {
      id: 4,
      type: "accept",
      name: "중수다람쥐",
    },
  ];

  return (
    <Frame>
      <Header />
      <S.PageContainer>
        <Typography.H3Sb>알림 전체</Typography.H3Sb>
        <S.NotificationSection>
          {TodayList.length && <NotificationList list={TodayList} />}
          {PrevList.length && <NotificationList list={PrevList} isPrev />}
        </S.NotificationSection>
      </S.PageContainer>
    </Frame>
  );
}
