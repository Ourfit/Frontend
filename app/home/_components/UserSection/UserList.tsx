import AfternoonIcon from "@/assets/images/afternoon.svg";
import EveningIcon from "@/assets/images/evening.svg";
import MorningIcon from "@/assets/images/morning.svg";
import { Typography } from "@/components/atoms/Typography";
import { WorkoutTimeLabels } from "@/constants/User";
import getMates from "@/services/getMates";
import { MateInfo } from "@/types/mates";
import { PreferredWorkoutTime } from "@/types/user";
import { useQuery } from "@tanstack/react-query";
import ProfileImgBadge from "@/components/common/DefaultProfileImg/ProfileImgBadge";
import * as S from "./UserList.style";
import { useRouter } from "next/navigation";

const ICONS = {
  MORNING: <MorningIcon />,
  AFTERNOON: <AfternoonIcon />,
  EVENING: <EveningIcon />,
};

interface UserListProps {
  isWorkout: boolean;
  isTime: boolean;
  preferredTimes: PreferredWorkoutTime | undefined;
  workoutTypes: string[] | undefined;
}

export default function UserList({
  isWorkout,
  isTime,
  preferredTimes,
  workoutTypes,
}: UserListProps) {
  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: ["mates", preferredTimes, workoutTypes?.join(",")],
    queryFn: () => getMates({ preferredTimes, workoutTypes }),
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
            workoutTypes?.includes(e.code),
          );

          const workout = filteredWorkouts.length
            ? filteredWorkouts[0]
            : user.favoriteWorkouts[0];

          return (
            <S.UserWrapper
              key={idx}
              onClick={() => router.push(`/mate/mateprofile/${user.id}`)}
            >
              <ProfileImgBadge imageUrl={user.profileUrl} />
              <S.UserInfoWrapper>
                <S.UserInfo>
                  <Typography.H4Sb>{user.nickname}</Typography.H4Sb>
                  <Typography.H6Md>{user.age}세</Typography.H6Md>
                </S.UserInfo>
                <S.ExercisePreferences>
                  <S.PreferenceBadge $isHighlighted={isWorkout}>
                    {user.favoriteWorkouts.length > 1
                      ? `${workout.name}+${user.favoriteWorkouts.length - 1}`
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
