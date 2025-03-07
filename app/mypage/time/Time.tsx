"use client";

import AfternoonIcon from "@/assets/images/afternoon.svg";
import EveningIcon from "@/assets/images/evening.svg";
import MorningIcon from "@/assets/images/morning.svg";
import { Typography } from "@/components/atoms/Typography";
import { TIME_MAPPING } from "@/constants/Time";
import { useMyPageInfo } from "@/hooks/queries/useMypageInfo";
import getTimeSlot from "@/utils/getTimeSlot";
import Link from "next/link";
import { JSX } from "react";
import * as S from "./style";

export default function Time() {
  const iconMapping: Record<string, JSX.Element> = {
    morning: <MorningIcon />,
    afternoon: <AfternoonIcon />,
    evening: <EveningIcon />,
  };

  const { data: userInfo } = useMyPageInfo();

  const preferenceKey = userInfo?.preferredWorkoutTime;
  return (
    <S.PreferenceTimeWrapper>
      <S.PreferenceHeader>
        <S.PreferenceTitle>
          선호 운동 시간
          <Typography.H3Bd
            style={{ marginLeft: "4px", color: "#004DFF" }}
          ></Typography.H3Bd>
        </S.PreferenceTitle>
        <Link href="/mypage/time">
          <S.PreferenceEdit>편집</S.PreferenceEdit>
        </Link>
      </S.PreferenceHeader>
      <S.PreferenceTime>
        {userInfo?.preferredWorkoutTime ? (
          <>
            {iconMapping[getTimeSlot(userInfo.preferredWorkoutTime)]}
            <Typography.H4Md color="#27282D" style={{ marginLeft: "8px" }}>
              {TIME_MAPPING[userInfo.preferredWorkoutTime]}
            </Typography.H4Md>
          </>
        ) : (
          <Typography.H4Md color="#27282D">미설정</Typography.H4Md>
        )}
      </S.PreferenceTime>
    </S.PreferenceTimeWrapper>
  );
}
