"use client";

import Header from "@/components/common/Header/Header";
import ListItem from "@/app/mypage/mate-history/_components/ListItem";
import * as S from "./style";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import getMates from "./_lib/getMates";
import { MateType } from "@/types/mate";

export default function MateHistoryPage() {
  const CATEGORY = {
    REQUEST: "신청 내역",
    MACHING: "매칭 내역",
  };

  const [active, setActive] = useState(CATEGORY.REQUEST);

  const { data } = useQuery({
    queryKey: ["mates"],
    queryFn: () => getMates(),
  });

  const mates: MateType[] = data?.data.content || [];

  const handleClick = (selectCategory: string) => {
    setActive(selectCategory);
  };

  const MateRequestList = mates.filter(
    (mate) => mate.actionType === "APPLY" && mate.actorNickname === "감자",
  );
  const MatchingList = mates.filter((mate) => mate.actionType !== "APPLY");

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
        </S.MateHistoryList>
      </S.PageContainer>
    </>
  );
}
