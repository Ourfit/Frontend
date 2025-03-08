import BadgeIcon from "@/assets/images/badge1.svg";
import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import * as S from "@/components/auth/signup/steps/Welcome/Welcome.style";
import CheckIcon from "@/assets/images/checkGray.svg";
import { ChallengeStepProps } from "@/types/step";
import { dateFormat } from "@/utils/monthList";

const Welcome = ({ step, formData }: ChallengeStepProps) => {
  const isStart = step === 1;

  return (
    <S.WelComeContainer $isChallenge>
      <S.WelcomeContentWrapper>
        <Typography.H3Md color={COLORS.GRAYSCALE_700}>
          {isStart ? "메이트와 함께 도전할" : "축하드려요"}
        </Typography.H3Md>
        {isStart ? (
          <div>
            <S.GradientText>운동 목표</S.GradientText>
            <Typography.H1Sb>를 설정할게요</Typography.H1Sb>
          </div>
        ) : (
          <S.GradientTextWrapper>
            <S.GradientText>챌린지 등록 완료!</S.GradientText>
          </S.GradientTextWrapper>
        )}
      </S.WelcomeContentWrapper>
      <BadgeIcon />
      <S.Description>
        <S.Content>
          <CheckIcon />
          {isStart ? (
            <Typography.H4Md>
              메이트랑 같은 도전 조건이 아니어도 돼요
            </Typography.H4Md>
          ) : (
            <Typography.H4Md>
              챌린지 시작일은{" "}
              <Typography.H4Md color={COLORS.BLUE_500}>
                {formData?.startAt &&
                  dateFormat(new Date(formData.startAt), "alarm")}
              </Typography.H4Md>{" "}
              이에요
            </Typography.H4Md>
          )}
        </S.Content>
        <S.Content>
          <CheckIcon />
          {isStart ? (
            <Typography.H4Md>
              도전 조건은 요일 외에는 수정할 수 없어요
            </Typography.H4Md>
          ) : (
            <Typography.H4Md>
              <Typography.H4Md color={COLORS.BLUE_500}>
                운동 목표 요일
              </Typography.H4Md>
              은 나중에 변경할 수 있어요
            </Typography.H4Md>
          )}
        </S.Content>
      </S.Description>
    </S.WelComeContainer>
  );
};

export default Welcome;
