import { Typography } from "@/components/atoms/Typography";
import CheckIcon from "@/assets/images/checkGray.svg";
import DumbbellsIcon from "@/assets/images/dumbbells.svg";
import { COLORS } from "@/constants/Theme";
import * as S from "./ChallengeInfo.style";
import { Challenge } from "@/types/challenge";
import { DAY_REVERSE_LABEL } from "@/constants/Challenge";
import { WEEKS } from "@/constants/Calendar";

export default function ChallengeInfo({
  challenge,
}: {
  challenge: Challenge | null;
}) {
  const angle = challenge?.completionRate
    ? (challenge.completionRate / 100) * 360
    : 0;
  const radius = 67;

  const iconX = radius * Math.cos((angle - 90) * (Math.PI / 180));
  const iconY = radius * Math.sin((angle - 90) * (Math.PI / 180));

  const days = challenge?.goalWorkoutDayOfWeeks
    .map((day) => DAY_REVERSE_LABEL[day])
    .sort((a, b) => WEEKS.indexOf(a) - WEEKS.indexOf(b))
    .join("/");

  return (
    <S.InfoContainer>
      <S.MainContent>
        <S.DateContainer>
          <S.Deadline>
            <Typography.H6Sb>마감일</Typography.H6Sb>
            <Typography.H6Md color={COLORS.GRAYSCALE_600}>
              {challenge?.endAt}
            </Typography.H6Md>
          </S.Deadline>
          <S.Dday>D-{challenge?.remainingDays}</S.Dday>
        </S.DateContainer>
        <S.RingContainer>
          <S.ProgressRing>
            <S.ProgressCircle />
            <S.RingFill $progress={challenge?.completionRate || 0} />
            <S.RingMask />
            <S.ProgressText $isNatural={!!challenge?.completionRate}>
              {challenge?.completionRate}%
              <Typography.H7Md color={COLORS.GRAYSCALE_600}>
                목표 달성률
              </Typography.H7Md>
            </S.ProgressText>
            {challenge?.completionRate && (
              <S.IconWrapper
                style={{ transform: `translate(${iconX}px, ${iconY}px)` }}
              >
                <DumbbellsIcon />
              </S.IconWrapper>
            )}
          </S.ProgressRing>
        </S.RingContainer>
      </S.MainContent>
      <S.DayContainer>
        <CheckIcon />
        <Typography.H5Md>
          매주
          <Typography.H5Md color={COLORS.BLUE_500}> {days} </Typography.H5Md>
          운동하기
        </Typography.H5Md>
      </S.DayContainer>
    </S.InfoContainer>
  );
}
