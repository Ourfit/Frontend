import MorningIcon from "@/assets/images/morning.svg";
import EveningIcon from "@/assets/images/evening.svg";
import AfternoonIcon from "@/assets/images/afternoon.svg";
import DumbbellsIcon from "@/assets/images/dumbbells.svg";
import * as S from "./UserList.style";
import Image from "next/image";
import { Typography } from "@/components/atoms/Typography";
import { MateInfo } from "@/types/mates";
import { PreferredWorkoutTime } from "@/types/user";
import { useQuery } from "@tanstack/react-query";
import { WorkoutTimeLabels } from "@/constants/User";
import DefaultProfileImg from "@/components/common/DefaultProfileImg/DefaultProfileImg";
import getMates from "@/services/getMates";

const ICONS = {
  MORNING: <MorningIcon />,
  AFTERNOON: <AfternoonIcon />,
  EVENING: <EveningIcon />,
};

interface UserListProps {
  isWorkout: boolean;
  isTime: boolean;
  peferredTimes: PreferredWorkoutTime[];
  workoutTypes: string[];
}

export default function UserList({
  isWorkout,
  isTime,
  peferredTimes,
  workoutTypes,
}: UserListProps) {
  const { data, isLoading } = useQuery({
    queryKey: ["mates", { peferredTimes, workoutTypes }],
    queryFn: () => getMates({ peferredTimes, workoutTypes }),
    staleTime: 5 * 60 * 1000,
  });
  const mates: MateInfo[] = data?.data.content;

  if (isLoading || !mates?.length) {
    return (
      <S.UserListContainer>
        <S.EmptyContainer>
          메이트를
          <br />
          물색중이에요!
        </S.EmptyContainer>
      </S.UserListContainer>
    );
  }

  return (
    <S.UserListContainer>
      <S.UserListWrapper>
        {mates.map((user, idx) => {
          const word = user.preferredWorkoutTime.split("_").at(-1) as
            | "MORNING"
            | "AFTERNOON"
            | "EVENING";
          const filteredWorkouts = user.favoriteWorkouts.filter((e) =>
            workoutTypes.includes(e.code),
          );

          const workout = filteredWorkouts.length
            ? filteredWorkouts[0]
            : user.favoriteWorkouts[0];

          return (
            <S.UserWrapper key={idx}>
              <S.ProfileBadge>
                <S.ProfileImageWrapper>
                  {user.profileUrl ? (
                    <Image
                      src={user.profileUrl}
                      alt="profile-image"
                      width={48}
                      height={48}
                    />
                  ) : (
                    <DefaultProfileImg />
                  )}
                </S.ProfileImageWrapper>
                <S.IconWrapper>
                  <DumbbellsIcon />
                </S.IconWrapper>
              </S.ProfileBadge>
              <S.UserInfoWrapper>
                <S.UserInfo>
                  <Typography.H4Sb>{user.nickname}</Typography.H4Sb>
                  <Typography.H6Md>{user.age}세</Typography.H6Md>
                </S.UserInfo>
                <S.ExercisePreferences>
                  <S.PreferenceBadge $isHighlighted={isWorkout}>
                    {user.favoriteWorkouts.length > 1
                      ? `${workout.name} + ${user.favoriteWorkouts.length - 1}`
                      : workout.name}
                  </S.PreferenceBadge>
                  <S.PreferenceBadge $isHighlighted={isTime}>
                    {ICONS[word]}
                    {WorkoutTimeLabels[user.preferredWorkoutTime]}
                  </S.PreferenceBadge>
                </S.ExercisePreferences>
              </S.UserInfoWrapper>
            </S.UserWrapper>
          );
        })}
      </S.UserListWrapper>
    </S.UserListContainer>
  );
}
