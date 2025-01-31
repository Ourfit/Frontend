"use client";

import { useRouter } from "next/navigation";
import AchievementRate100Icon from "@/assets/images/achievementRate100.svg";
import * as S from "./MateChallengeCard.style";
import { MateChallengeTodo } from "./MateChallengeTodo";
import { MateChallengeDay } from "./MateChallengeDay";

export const MateChallengeCard3 = () => {
  const router = useRouter();

  return (
    <>
      <S.ContentContainer>
        <MateChallengeDay />
        <S.IconWrapper>
          <AchievementRate100Icon width={134} height={134} />
          <S.TextOverlay>
            <div className="percentage">100%</div>
            <div className="label">목표 달성률</div>
          </S.TextOverlay>
        </S.IconWrapper>
        <MateChallengeTodo />
      </S.ContentContainer>
    </>
  );
};
