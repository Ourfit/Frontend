"use client";

import { Typography } from "@/components/atoms/Typography";
import Header from "@/components/common/Header/Header";
import Frame from "@/components/layout/Frame";
import * as S from "./style";
import NotificationList from "./_components/NotificationList";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import getMatesHistory from "@/services/getMatesHistory";
import { useEffect } from "react";
import { MateHistory } from "@/types/mates";
import { dateFormat } from "@/utils/monthList";

export default function NotificationsPage() {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const { data, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      initialPageParam: 0,
      queryKey: ["mates"],
      queryFn: ({ pageParam }) => getMatesHistory({ pageParam, size: 50 }),
      getNextPageParam: (lastPage) =>
        lastPage.data.hasNext ? lastPage.data.pageable.pageNumber + 1 : null,
    });

  useEffect(() => {
    if (inView && hasNextPage && !isFetching && !isFetchingNextPage)
      fetchNextPage();
  }, [inView, hasNextPage]);

  const notifications: MateHistory[] = !data?.pages
    ? []
    : data.pages
        .map((page) => page.data.content)
        .flat()
        .filter(
          (mate) =>
            mate.actionType === "RECEIVE" ||
            (mate.actionType === "ACCEPT" && mate.roleType === "ACTOR"),
        );

  const TodayList = notifications.filter(
    (e) => dateFormat(new Date(e.createdAt)) === dateFormat(new Date()),
  );

  const PrevList = notifications.filter(
    (e) => dateFormat(new Date(e.createdAt)) !== dateFormat(new Date()),
  );

  return (
    <Frame>
      <Header />
      <S.PageContainer>
        <Typography.H3Sb>알림 전체</Typography.H3Sb>
        <S.NotificationSection>
          {TodayList.length ? <NotificationList list={TodayList} /> : null}
          {PrevList.length ? (
            <NotificationList list={PrevList} ref={ref} isPrev />
          ) : null}
        </S.NotificationSection>
      </S.PageContainer>
    </Frame>
  );
}
