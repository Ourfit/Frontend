import Button from "@/components/common/Button";
import ChallengeInfo from "../ChallengeInfo/ChallengeInfo";
import * as S from "./MyChallenge.style";
import { Typography } from "@/components/atoms/Typography";
import ChallengeMate from "./ChallengeMate/ChallengeMate";

export default function MyChallenge() {
  const isMateExist = true;
  return (
    <S.MyChallengeWrapper>
      <ChallengeInfo />
      {isMateExist ? (
        <S.MateWrapper>
          <ChallengeMate />
          <ChallengeMate />
        </S.MateWrapper>
      ) : (
        <S.NoMateWrapper>
          <S.NoMateText>
            <Typography.H4Md>아직 메이트가 없어요!</Typography.H4Md>
          </S.NoMateText>
          <Button size="xs" variant="primary">
            메이트 찾기
          </Button>
        </S.NoMateWrapper>
      )}
    </S.MyChallengeWrapper>
  );
}
