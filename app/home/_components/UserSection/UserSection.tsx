"use client";

import UserSectionTitle from "./UserSectionTitle";
import * as S from "./UserSection.style";
import UserList from "./UserList";
import { PreferredWorkoutTime } from "@/types/user";
import { GROUP_TYPES } from "@/constants/User";

interface UserSectionType {
  nickname: string;
  region: string;
  favoriteWorkouts: { code: string; name: string }[];
  preferredWorkoutTime: PreferredWorkoutTime;
}

export default function UserSection({
  nickname,
  region,
  favoriteWorkouts,
  preferredWorkoutTime,
}: UserSectionType) {
  const UserGroups = [
    {
      type: GROUP_TYPES.REGION,
      title: "📍 같은 동네에 있어요",
      description: `같은 ${region}에 있는 메이트`,
    },
    {
      type: GROUP_TYPES.WORKOUT,
      title: "👊🏻 선호 운동이 일치해요",
      description: "선호하는 운동이 일치한 메이트",
    },
    {
      type: GROUP_TYPES.TIME,
      title: "⏱️ 선호 운동 시간이 일치해요",
      description: "선호 운동 시간대가 일치한 메이트",
    },
  ];

  return (
    <S.UserSectionContainer>
      {UserGroups.map((group) => {
        const isWorkout = group.type === GROUP_TYPES.WORKOUT;
        const isTime = group.type === GROUP_TYPES.TIME;

        return (
          <S.UserSectionWrapper key={group.type}>
            <UserSectionTitle
              title={group.title}
              description={group.description}
              nickname={nickname}
            />
            <UserList
              isWorkout={isWorkout}
              isTime={isTime}
              peferredTimes={isTime ? [preferredWorkoutTime] : []}
              workoutTypes={
                isWorkout
                  ? favoriteWorkouts.map(
                      (workout: { code: string; name: string }) => workout.code,
                    )
                  : []
              }
            />
          </S.UserSectionWrapper>
        );
      })}
    </S.UserSectionContainer>
  );
}
