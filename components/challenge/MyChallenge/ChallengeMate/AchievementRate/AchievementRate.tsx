import * as S from "./AchievementRate.style";
import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import Button from "@/components/common/Button";
import CircleCheck from "@/assets/images/circle-check.svg";
import { useRouter } from "next/navigation";

export default function AchievementRate({
  isChallenging,
}: {
  isChallenging: boolean;
}) {
  const router = useRouter();
  const progress = 50;

  return (
    <>
      {isChallenging ? (
        <S.ChallengeInformation>
          <S.DeadlineWrapper>
            <S.DeadlineTextWrapper>
              <Typography.H6Sb color={COLORS.GRAYSCALE_900}>
                마감일
              </Typography.H6Sb>
              <Typography.H6Md color={COLORS.GRAYSCALE_600}>
                2025.04.21
              </Typography.H6Md>
            </S.DeadlineTextWrapper>
            <S.DdayBox>
              <Typography.H5Sb color={COLORS.GRAYSCALE_900}>
                D-120
              </Typography.H5Sb>
            </S.DdayBox>
          </S.DeadlineWrapper>
          <S.CircleContainer>
            <S.Circle>
              <S.Mask>
                <S.Fill style={{ transform: `rotate(${progress * 1.8}deg)` }} />
              </S.Mask>
            </S.Circle>
            <S.InsideWrapper>
              <S.InsideText>
                <S.Percentage>{progress}%</S.Percentage>
                <Typography.H7Md color={COLORS.GRAYSCALE_600}>
                  목표 달성률
                </Typography.H7Md>
              </S.InsideText>
            </S.InsideWrapper>
          </S.CircleContainer>
          <S.ExerciseDay>
            <CircleCheck fill={COLORS.GRAYSCALE_400} />
            <Typography.H5Md>
              매주 <S.HighlightedText>&nbsp;월/수/금&nbsp;</S.HighlightedText>
              운동하기
            </Typography.H5Md>
          </S.ExerciseDay>
        </S.ChallengeInformation>
      ) : (
        <S.ChallengeSituation>
          <S.NoChallengeWrapper>
            <Typography.H4Md color={COLORS.GRAYSCALE_600}>
              아직 등록한 챌린지가 없어요!
            </Typography.H4Md>
            <Button
              size="xs"
              variant="primary"
              onClick={() => router.push("/challenge/register")}
            >
              챌린지 등록
            </Button>
          </S.NoChallengeWrapper>
        </S.ChallengeSituation>
      )}
    </>
  );
}
