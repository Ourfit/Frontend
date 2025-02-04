"use client";

import Header from "@/components/common/Header/Header";
import ListItem from "@/app/mypage/mate-history/_components/ListItem";
import * as S from "./style";
import { useState } from "react";

export default function MateHistoryPage() {
  const CATEGORY = {
    REQUEST: "신청 내역",
    MACHING: "매칭 내역",
  };

  const [active, setActive] = useState(CATEGORY.REQUEST);

  const handleClick = (selectCategory: string) => {
    setActive(selectCategory);
  };

  const MateRequestList = [
    {
      id: 1,
      date: "2024.12.24",
      name: "중수다람쥐",
    },
    {
      id: 2,
      date: "2024.12.24",
      name: "중수다람쥐",
    },
    {
      id: 3,
      date: "2024.12.24",
      name: "중수다람쥐",
    },
    {
      id: 4,
      date: "2024.12.24",
      name: "중수다람쥐",
    },
  ];

  const MatchingList = [
    {
      id: 1,
      date: "2024.12.24",
      name: "중수다람쥐",
      type: "MATCHING",
      image: "/icons/Kakao_logo.png",
    },
    {
      id: 2,
      date: "2024.12.24",
      name: "중수다람쥐",
      type: "CANCLE",
      image: "/icons/Kakao_logo.png",
    },
    {
      id: 3,
      date: "2024.12.24",
      name: "중수다람쥐",
      type: "CANCLE",
      image: "/icons/Kakao_logo.png",
    },
    {
      id: 4,
      date: "2024.12.24",
      name: "중수다람쥐",
      type: "MATCHING",
      image: "/icons/Kakao_logo.png",
    },
  ];

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
                  <span>{item.name}</span>님에게 메이트 신청을 보냈어요!
                </ListItem>
              ))
            : MatchingList.map((item) => (
                <ListItem
                  key={item.id}
                  title={
                    item.type === "MATCHING"
                      ? "🎉 메이트 매칭"
                      : "😢 메이트 해제"
                  }
                  data={item}
                  hasArrowButton={false}
                >
                  <span>{item.name}</span>님과 메이트가{" "}
                  {item.type === "CANCLE" && "해제"}되었어요.
                </ListItem>
              ))}
        </S.MateHistoryList>
      </S.PageContainer>
    </>
  );
}
