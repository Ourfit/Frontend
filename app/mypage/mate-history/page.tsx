"use client";

import Header from "@/components/common/Header/Header";
import ListItem from "@/app/mypage/mate-history/_components/ListItem";
import * as S from "./style";
import { useEffect, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import getMatesHistory from "@/services/getMatesHistory";
import { MateHistory } from "@/types/mates";

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
      initialPageParam: 0,
      queryKey: ["mates", active],
      queryFn: ({ pageParam }) =>
        active === CATEGORY.REQUEST
          ? getMatesHistory({ pageParam: pageParam, actionTypes: "APPLY" })
          : getMatesHistory({ pageParam }),
      getNextPageParam: (lastPage) =>
        lastPage.data.hasNext ? lastPage.data.pageable.pageNumber + 1 : null,
    });

  useEffect(() => {
    if (inView && hasNextPage && !isFetching && !isFetchingNextPage)
      fetchNextPage();
  }, [inView, hasNextPage]);

  const mates: MateHistory[] = !data?.pages
    ? []
    : data.pages.map((page) => page.data.content).flat();

  const handleClick = (selectCategory: string) => {
    setActive(selectCategory);
  };

  const MateRequestList = mates.filter((mate) => mate.roleType === "ACTOR");
  const MatchingList = mates.filter(
    (mate) => mate.actionType === "ACCEPT" || mate.actionType === "UNMATE",
  );

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
                    {item.roleType === "ACTOR"
                      ? item.targetNickname
                      : item.actorNickname}
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
