"use client";

import Header from "@/components/common/Header/Header";
import Frame from "@/components/layout/Frame";
import Tab from "@/components/common/Tab/Tab";
import React, { useState } from "react";
import * as S from "./style";
import NotificationBanner from "@/components/NotificationBanner/NotificationBanner";
import MateCard from "./_components/MateCard/MateCard";
import EmptyComponent from "./_components/EmptyComponet/EmptyComponent";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import getMyMates from "@/services/challenge/getMyMates";
import getUserMe from "@/services/getUserMe";
import getChallenge from "@/services/challenge/getChallenge";

export default function Page() {
  const router = useRouter();
  const tabItems = ["챌린지", "기록"];
  const [selectedTab, setSelectedTab] = useState(tabItems[0]);

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  const { data: user } = useQuery({
    queryKey: ["userMe"],
    queryFn: () => getUserMe(),
    staleTime: 5 * 60 * 1000,
  });

  const { data: challenge } = useQuery({
    queryKey: ["myChallenge"],
    queryFn: () => getChallenge(),
    staleTime: 5 * 60 * 1000,
  });

  const { data: mate } = useQuery({
    queryKey: ["myMates"],
    queryFn: () => getMyMates(),
    staleTime: 5 * 60 * 1000,
  });

  const { id, nickname, age, gender, profileUrl, skillLevel } = user
    ? user.data
    : {};
  const userInfo = { id, nickname, age, gender, profileUrl, skillLevel };
  const myChallenge = challenge ? challenge.data : {};
  const myMateInfo = mate ? mate.data?.myMate : {};

  const challengeList = [
    { info: { ...userInfo, isMine: true }, challenge: myChallenge.me },
    { info: myMateInfo, challenge: myChallenge.myMate },
  ];

  return (
    <Frame>
      <Header />
      <Tab tabs={tabItems} onClick={handleTabChange} />

      <S.PageContainer $bgColorGray={true}>
        <NotificationBanner
          isChallenge={true}
          dayElapsed={myChallenge?.dayElapsed}
        />
        {selectedTab === "챌린지" && (
          <S.MateContent>
            {mate?.data && myMateInfo ? (
              <S.MateList>
                {challengeList.map((challenge, i) => (
                  <MateCard
                    key={i}
                    info={challenge.info}
                    challenge={challenge.challenge}
                    mateId={mate.data.mateId}
                  />
                ))}
              </S.MateList>
            ) : (
              <EmptyComponent
                title="아직 메이트가 없어요!"
                buttonContent="메이트 찾기"
                onClick={() => router.push("/mate/explore")}
                isMine
              />
            )}
          </S.MateContent>
        )}
      </S.PageContainer>
    </Frame>
  );
}
