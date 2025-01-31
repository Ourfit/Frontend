"use client";

import { useRouter } from "next/navigation";
import AchievementRate50Icon from "@/assets/images/achievementRate50.svg";
import LogoIcon from "@/assets/images/logo.svg";
import * as S from "./MateChallengeCard.style";
import { MateChallengeTodo } from "./MateChallengeTodo";
import { MateChallengeDay } from "./MateChallengeDay";

export const MateChallengeCard2 = () => {
  const router = useRouter();

  return (
    <>
      <S.ContentContainer>
        <MateChallengeDay />
        <S.HalfIconWrapper>
            <S.PercentIconWrapper>
          <AchievementRate50Icon width={70} height={134} />
          </S.PercentIconWrapper>
          <S.TextOverlay>
            <div className="percentage">50%</div>
            <div className="label">목표 달성률</div>
          </S.TextOverlay>
        </S.HalfIconWrapper>
        <MateChallengeTodo />
      </S.ContentContainer>
    </>
  );
};
