import * as S from "./ChallengeInfo.style";
import Dumbbells from "@/assets/images/dumbbells.svg";
import { Typography } from "@/components/atoms/Typography";

export default function ChallengeInfo() {
  return (
    <S.ChallengeInfo>
      <S.IconBox>
        <Dumbbells />
      </S.IconBox>
      <S.ChallengeTextWrapper>
        <S.PreventDate>
          <Typography.H6Md>챌린지 도전</Typography.H6Md>
        </S.PreventDate>
        <S.ChallengeStatus>
          <Typography.H4Sb>챌린지 시작 +24일!</Typography.H4Sb>
        </S.ChallengeStatus>
      </S.ChallengeTextWrapper>
    </S.ChallengeInfo>
  );
}
