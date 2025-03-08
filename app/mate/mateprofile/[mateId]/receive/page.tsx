"use client";

import BadgeIcon from "@/assets/images/badge1.svg";
import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import * as S from "@/components/auth/signup/steps/Welcome/Welcome.style";
import CheckIcon from "@/assets/images/checkGray.svg";
import styled from "styled-components";
import Button from "@/components/common/Button";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import Header from "@/components/common/Header/Header";
import { useRouter } from "next/navigation";

const ReceivePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px 28px 20px;
  height: 100%;
`;

const ReceivePageWrapper = styled.div`
  margin-top: 34px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex-grow: 1;
`;

export default function ReceivePage() {
  const router = useRouter();

  return (
    <>
      <Header title=" " />
      <ReceivePageContainer>
        <ReceivePageWrapper>
          <S.WelComeContainer $isChallenge>
            <S.WelcomeContentWrapper>
              <Typography.H3Md color={COLORS.GRAYSCALE_700}>
                축하드려요
              </Typography.H3Md>
              <S.GradientTextWrapper>
                <S.GradientText>메이트를 맺으셨군요!</S.GradientText>
              </S.GradientTextWrapper>
            </S.WelcomeContentWrapper>
            <BadgeIcon />
            <S.Description>
              <S.Content>
                <CheckIcon />
                <Typography.H4Md>
                  메이트와
                  <Typography.H4Md color={COLORS.BLUE_500}>
                    {" "}
                    함께 다닐 운동 시설
                  </Typography.H4Md>
                  을 등록해주세요
                </Typography.H4Md>
              </S.Content>
              <S.Content>
                <CheckIcon />
                <Typography.H4Md>
                  메이트와
                  <Typography.H4Md color={COLORS.BLUE_500}>
                    {" "}
                    함께 운동하는 시간대
                  </Typography.H4Md>
                  를 등록해주세요
                </Typography.H4Md>
              </S.Content>
            </S.Description>
          </S.WelComeContainer>
        </ReceivePageWrapper>
        <Button
          size={BUTTON_SIZES.LARGE}
          variant={BUTTON_VARIANTS.PRIMARY}
          disabled={false}
          onClick={() => router.replace("/mate")}
          style={{ marginBottom: "-68px" }}
        >
          메이트 화면으로 이동
        </Button>
      </ReceivePageContainer>
    </>
  );
}
