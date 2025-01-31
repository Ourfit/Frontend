"use client";

import { useRouter } from "next/navigation";
import AchievementRateIcon from "@/assets/images/achievementRate.svg";
import * as S from "./MateChallengeCard.style";
import { MateChallengeTodo } from "./MateChallengeTodo";
import { MateChallengeDay } from "./MateChallengeDay";

export const MateChallengeCard = () => {
  const router = useRouter();

  return (
    <>
      <S.ContentContainer>
        <MateChallengeDay />
        <S.IconWrapper>
          <AchievementRateIcon width={134} height={134} />
          <S.TextOverlay>
            <div className="percentage">0%</div>
            <div className="label">목표 달성률</div>
          </S.TextOverlay>
        </S.IconWrapper>
        <MateChallengeTodo />
      </S.ContentContainer>
    </>
  );
};
