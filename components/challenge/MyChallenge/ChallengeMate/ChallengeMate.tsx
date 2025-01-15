import { Typography } from "@/components/atoms/Typography";
import * as S from "./ChallengeMate.style";
import Button from "@/components/common/Button";
import ChallengeModal from "../ChallengeModal/ChallengeModal";
import { useState } from "react";

export default function ChallengeMate() {
  const isChallenging = true;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <S.ChallengeMateContainer>
      <S.MateInformationWrapper>
        <S.MateProfileWrapper>
          <S.MateProfileImage src="profile" alt="메이트 프로필" />
          <S.ProfileTextWrapper>
            <S.MateNickname>
              <Typography.H4Md>중수다람쥐</Typography.H4Md>
            </S.MateNickname>
            <S.MateInfo>
              <Typography.H5Md>여, 27세</Typography.H5Md>
            </S.MateInfo>
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

      <S.ChallengeSituation>
        <S.NoChallengeWrapper>
          <S.NochallengeText>
            <Typography.H4Md>아직 등록한 챌린지가 없어요!</Typography.H4Md>
          </S.NochallengeText>
          <Button size="xs" variant="primary">
            챌린지 등록
          </Button>
        </S.NoChallengeWrapper>
      </S.ChallengeSituation>
    </S.ChallengeMateContainer>
  );
}
