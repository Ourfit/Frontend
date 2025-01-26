"use client";

import { Typography } from "@/components/atoms/Typography";
import * as S from "./style";

interface MatchedMateProps {
  name: string;
  age: number;
  daysLeft: number;
}

export default function MatchedMate({ name, age, daysLeft }: MatchedMateProps) {
  return (
    <S.MatchedMateContainer>
      <S.MateCardWrapper>
        <S.MateCard>
          <S.ProfileImage />
          <S.MateInfo>
            <Typography.H4Md>
              {name}, {age}
            </Typography.H4Md>
            <Typography.H6Sb>
              종수다방님 남은 {daysLeft}일째 메이트예요!
            </Typography.H6Sb>
          </S.MateInfo>
          <S.ActionButtons>
            <S.Button>메이트 해제</S.Button>
            <S.Button>프로필 보기</S.Button>
          </S.ActionButtons>
        </S.MateCard>
      </S.MateCardWrapper>

      <S.MateFacilityInfoWrapper>
        <S.FacilityInfo>
          <Typography.H6Sb>🏋️‍♀️ 운동 시설</Typography.H6Sb>
          <S.RegisterButton>등록하기</S.RegisterButton>
        </S.FacilityInfo>
      </S.MateFacilityInfoWrapper>
      <S.Line />

      <S.MateTimeWrapper>
        <S.TimeInfo>
          <Typography.H6Sb>⏰ 운동 시간</Typography.H6Sb>
          <S.RegisterButton>등록하기</S.RegisterButton>
        </S.TimeInfo>
      </S.MateTimeWrapper>
    </S.MatchedMateContainer>
  );
}
