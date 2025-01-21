import { Typography } from "@/components/atoms/Typography";
import * as S from "./ChallengeMate.style";
import ChallengeModal from "../ChallengeModal/ChallengeModal";
import { useState } from "react";
import { COLORS } from "@/constants/Theme";
import AchievementRate from "./AchievementRate/AchievementRate";

export default function ChallengeMate() {
  const isChallenging = false;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <S.ChallengeMateContainer>
      <S.MateInformationWrapper>
        <S.MateProfileWrapper>
          <S.MateProfileImage src="profile" alt="메이트 프로필" />
          <S.ProfileTextWrapper>
            <Typography.H4Md color={COLORS.GRAYSCALE_900}>
              중수다람쥐
            </Typography.H4Md>
            <Typography.H5Md color={COLORS.GRAYSCALE_600}>
              여, 27세
            </Typography.H5Md>
          </S.ProfileTextWrapper>
        </S.MateProfileWrapper>
        {isChallenging ? (
          <S.MoreIconWrapper onClick={() => setIsModalOpen(true)}>
            <S.DotsContainer>
              <S.Dot />
              <S.Dot />
              <S.Dot />
            </S.DotsContainer>
          </S.MoreIconWrapper>
        ) : (
          <S.MateLevelBadge>
            <Typography.H6Sb>운동초보</Typography.H6Sb>
          </S.MateLevelBadge>
        )}
      </S.MateInformationWrapper>
      {isModalOpen && <ChallengeModal setIsModalOpen={setIsModalOpen} />}
      <S.Divider />
      <AchievementRate isChallenging={isChallenging} />
    </S.ChallengeMateContainer>
  );
}
