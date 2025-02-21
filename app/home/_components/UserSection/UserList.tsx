import MorningIcon from "@/assets/images/morning.svg";
import EveningIcon from "@/assets/images/evening.svg";
import AfternoonIcon from "@/assets/images/afternoon.svg";
import DumbbellsIcon from "@/assets/images/dumbbells.svg";
import * as S from "./UserList.style";
import Image from "next/image";
import { Typography } from "@/components/atoms/Typography";
import { MateInfo } from "@/types/mates";
import { PreferredWorkoutTime } from "@/types/user";

const ICONS = {
  MORNING: <MorningIcon />,
  AFTERNOON: <AfternoonIcon />,
  EVENING: <EveningIcon />,
};

const WorkoutTimeLabels: Record<PreferredWorkoutTime, string> = {
  WEEKDAY_MORNING: "평일 아침",
  WEEKDAY_AFTERNOON: "평일 오후",
  WEEKDAY_EVENING: "평일 저녁",
  WEEKEND_MORNING: "주말 아침",
  WEEKEND_AFTERNOON: "주말 오후",
  WEEKEND_EVENING: "주말 저녁",
};

interface UserListProps {
  isWorkout: boolean;
  isTime: boolean;
  userList: MateInfo[];
}

export default function UserList({
  isWorkout,
  isTime,
  userList,
}: UserListProps) {
  return (
    <S.UserListContainer>
      {userList.length ? (
        <S.UserListWrapper>
          {userList.map((user, idx) => {
            const word = user.preferredWorkoutTime.split("_").at(-1) as
              | "MORNING"
              | "AFTERNOON"
              | "EVENING";

            return (
              <S.UserWrapper key={idx}>
                <S.ProfileBadge>
                  <S.ProfileImageWrapper>
                    <Image
                      src={user.profileUrl}
                      alt="profile-image"
                      width={48}
                      height={48}
                    />
                  </S.ProfileImageWrapper>
                  <S.IconWrapper>
                    <DumbbellsIcon />
                  </S.IconWrapper>
                </S.ProfileBadge>
                <S.UserInfoWrapper>
                  <S.UserInfo>
                    <Typography.H4Sb>{user.nickname}</Typography.H4Sb>
                    <Typography.H6Md>25세</Typography.H6Md>
                  </S.UserInfo>
                  <S.ExercisePreferences>
                    <S.PreferenceBadge $isHighlighted={isWorkout}>
                      {user.favoriteWorkouts.length > 1
                        ? `${user.favoriteWorkouts[0].name} + ${user.favoriteWorkouts.length - 1}`
                        : user.favoriteWorkouts[0].name}
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
      ) : (
        <S.EmptyContainer>
          메이트를
          <br />
          물색중이에요!
        </S.EmptyContainer>
      )}
    </S.UserListContainer>
  );
}
