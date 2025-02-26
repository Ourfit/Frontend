"use client";

import Header from "@/components/common/Header/Header";
import ListItem from "@/app/mypage/mate-history/_components/ListItem";
import * as S from "./style";
import { useEffect, useState } from "react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import getMates from "./_lib/getMates";
import { MateType } from "@/types/mate";
import { useInView } from "react-intersection-observer";

const CATEGORY = {
  REQUEST: "신청 내역",
  MACHING: "매칭 내역",
};

export default function MateHistoryPage() {
  const [active, setActive] = useState(CATEGORY.REQUEST);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const { data, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      initialPageParam: 1,
      queryKey: ["mates"],
      queryFn: ({ pageParam }) =>
        active === CATEGORY.REQUEST
          ? getMates(pageParam, "APPLY")
          : getMates(pageParam),
      getNextPageParam: (lastPage) =>
        lastPage.page ? lastPage.page + 1 : null,
    });

  useEffect(() => {
    if (inView && hasNextPage && !isFetching && !isFetchingNextPage)
      fetchNextPage();
  }, [inView, hasNextPage]);

  const mates: MateType[] = [];

  const handleClick = (selectCategory: string) => {
    setActive(selectCategory);
  };

  const MateRequestList = mates.filter(
    (mate) => mate.actionType === "APPLY" && mate.actorNickname === "감자",
  );
  const MatchingList = mates.filter((mate) => mate.actionType !== "APPLY");

  // const MateRequestList = [
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  // ];

  // const MatchingList = [
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  //   {
  //     id: 5,
  //     mateId: 2,
  //     actionType: "REQUEST",
  //     isRead: false,
  //     actorId: 2,
  //     actorNickname: "운초",
  //     targetId: 4,
  //     targetNickname: "운동왕",
  //     createdAt: "2021-08-01T12:00:00",
  //   },
  // ];

  return (
    <>
      <Header title="메이트 내역 관리" />
      <S.PageContainer>
        <S.ButtonWrapper>
          {Object.values(CATEGORY).map((option) => (
            <S.Button
              key={option}
              $isActive={active === option}
              onClick={() => handleClick(option)}
            >
              {option}
            </S.Button>
          ))}
        </S.ButtonWrapper>
        <S.MateHistoryList>
          {active === CATEGORY.REQUEST
            ? MateRequestList.map((item) => (
                <ListItem key={item.id} title="메이트 신청" data={item}>
                  <span>{item.targetNickname}</span>님에게 메이트 신청을
                  보냈어요!
                </ListItem>
              ))
            : MatchingList.map((item) => (
                <ListItem
                  key={item.id}
                  title={
                    item.actionType === "ACCEPT"
                      ? "🎉 메이트 매칭"
                      : "😢 메이트 해제"
                  }
                  data={item}
                  hasArrowButton={false}
                >
                  <span>
                    {item.targetNickname === "감자"
                      ? item.actorNickname
                      : item.targetNickname}
                  </span>
                  님과 메이트가 {item.actionType === "UNMATE" && "해제"}
                  되었어요.
                </ListItem>
              ))}
          <div ref={ref} />
        </S.MateHistoryList>
      </S.PageContainer>
    </>
  );
}
