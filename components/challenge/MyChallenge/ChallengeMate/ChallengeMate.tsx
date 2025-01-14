import { Typography } from "@/components/atoms/Typography";
import * as S from "./ChallengeMate.style";
import Button from "@/components/common/Button";

export default function ChallengeMate() {
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
        <S.MateLevelBadge>
          <Typography.H6Sb>운동초보</Typography.H6Sb>
        </S.MateLevelBadge>
      </S.MateInformationWrapper>
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
