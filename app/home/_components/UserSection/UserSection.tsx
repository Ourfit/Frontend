"use client";

import UserSectionTitle from "./UserSectionTitle";
import * as S from "./UserSection.style";
import UserList from "./UserList";
import { PreferredWorkoutTime } from "@/types/user";
import { useQuery } from "@tanstack/react-query";
import getMates from "../../_lib/getMates";

interface UserSectionType {
  nickname: string;
  favoriteWorkouts: { code: string; name: string }[];
  preferredWorkoutTime: PreferredWorkoutTime;
}

export default function UserSection({
  nickname,
  favoriteWorkouts,
  preferredWorkoutTime,
}: UserSectionType) {
  const { data: regionMates, isLoading: regionMatesLoading } = useQuery({
    queryKey: ["mates"],
    queryFn: () => getMates({ peferredTimes: [], workoutTypes: [] }),
  });

  const { data: workoutMates, isLoading: workoutMatesLoading } = useQuery({
    queryKey: ["mates"],
    queryFn: () =>
      getMates({
        peferredTimes: [],
        workoutTypes: favoriteWorkouts.map(
          (workout: { code: string; name: string }) => workout.code,
        ),
      }),
  });

  const { data: timeMates, isLoading: timeMatesLoading } = useQuery({
    queryKey: ["mates"],
    queryFn: () =>
      getMates({ peferredTimes: [preferredWorkoutTime], workoutTypes: [] }),
  });

  if (regionMatesLoading || workoutMatesLoading || timeMatesLoading) {
    return <div>loading</div>;
  }

  const UserGroups = [
    {
      title: "📍 같은 동네에 있어요",
      description: "같은 신천동에 있는 메이트",
      userList: regionMates.data,
    },
    {
      title: "👊🏻 선호 운동이 일치해요",
      description: "선호하는 운동이 일치한 메이트",
      userList: workoutMates.data,
    },
    {
      title: "⏱️ 선호 운동 시간이 일치해요",
      description: "선호 운동 시간대가 일치한 메이트",
      userList: timeMates.data,
    },
  ];

  return (
    <S.UserSectionContainer>
      {UserGroups.map((group, idx) => (
        <S.UserSectionWrapper key={idx}>
          <UserSectionTitle
            title={group.title}
            description={group.description}
            nickname={nickname}
          />
          <UserList
            isWorkout={idx === 1}
            isTime={idx === 2}
            userList={group.userList}
          />
        </S.UserSectionWrapper>
      ))}
    </S.UserSectionContainer>
  );
}
