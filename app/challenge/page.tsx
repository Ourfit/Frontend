"use client";

import Header from "@/components/common/Header/Header";
import Frame from "@/components/layout/Frame";
import Tab from "@/components/common/Tab/Tab";
import React, { useEffect, useState } from "react";
import * as S from "./style";
import NotificationBanner from "@/components/NotificationBanner/NotificationBanner";
import MateCard from "./_components/MateCard/MateCard";
import EmptyComponent from "./_components/EmptyComponet/EmptyComponent";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import getUserMe from "@/services/getUserMe";
import getChallenge from "@/services/challenge/getChallenge";
import { useChallengeStore } from "@/stores/challengeStore";
import { useMateInfo } from "@/hooks/queries/useMateInfo";

export default function Page() {
  const router = useRouter();
  const { addChallenge } = useChallengeStore();
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

  const mate = useMateInfo();

  const userInfo = {
    id: user?.id || "",
    nickname: user?.nickname || "",
    age: user?.age || 0,
    gender: user?.gender || "",
    profileUrl: user?.profileUrl || "",
    skillLevel: user?.skillLevel || "",
  };
  const myChallenge = challenge?.data || {};
  const myMateInfo = mate?.data?.myMate || {};

  const challengeList = [
    { info: { ...userInfo, isMine: true }, challenge: myChallenge.me },
    { info: myMateInfo, challenge: myChallenge.myMate },
  ];

  useEffect(() => {
    if (myChallenge?.me) {
      addChallenge({
        id: myChallenge.me.challengeId,
        days: myChallenge.me.goalWorkoutDayOfWeeks,
      });
    }
  }, [myChallenge, addChallenge]);

  return (
    <Frame>
      <Header />
      <Tab tabs={tabItems} activeTab={selectedTab} onClick={handleTabChange} />

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
