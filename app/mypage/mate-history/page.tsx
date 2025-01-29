"use client";

import Header from "@/components/common/Header/Header";
import ListItem from "@/components/common/ListItem/ListItem";
import * as S from "./style";
import { useState } from "react";

export default function MateHistoryPage() {
  const [active, setActive] = useState("신청 내역");

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
      image: "/icons/Kakao_logo.png",
    },
    {
      id: 2,
      date: "2024.12.24",
      name: "중수다람쥐",
      image: "/icons/Kakao_logo.png",
    },
    {
      id: 3,
      date: "2024.12.24",
      name: "중수다람쥐",
      image: "/icons/Kakao_logo.png",
    },
    {
      id: 4,
      date: "2024.12.24",
      name: "중수다람쥐",
      image: "/icons/Kakao_logo.png",
    },
  ];

  return (
    <>
      <Header />
      <S.PageContainer>
        <S.ButtonWrapper>
          <S.Button
            $isActive={active === "신청 내역"}
            onClick={() => handleClick("신청 내역")}
          >
            신청 내역
          </S.Button>
          <S.Button
            $isActive={active === "매칭 내역"}
            onClick={() => handleClick("매칭 내역")}
          >
            매칭 내역
          </S.Button>
        </S.ButtonWrapper>
        <S.MateHistoryList>
          {MateRequestList.map((item) => (
            <ListItem key={item.id} title="메이트 신청" data={item}>
              <span>{item.name}</span>님에게 메이트 신청을 보냈어요!
            </ListItem>
          ))}
        </S.MateHistoryList>
      </S.PageContainer>
    </>
  );
}
