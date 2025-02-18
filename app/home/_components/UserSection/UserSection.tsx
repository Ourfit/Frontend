"use client";

import UserSectionTitle from "./UserSectionTitle";
import * as S from "./UserSection.style";
import UserList from "./UserList";
import { MateInfo } from "@/types/mates";
import { PreferredWorkoutTime } from "@/types/user";

interface UserSectionType {
  nickname: string;
  favoriteWorkouts: { code: string; name: string }[];
  preferredWorkoutTime: PreferredWorkoutTime[];
}

export default function UserSection({
  nickname,
  favoriteWorkouts,
  preferredWorkoutTime,
}: UserSectionType) {
  // const { data: regionMates } = useQuery({
  //   queryKey: ["mates"],
  //   queryFn: () => getMates({ peferredTimes: [], workoutTypes: [] }),
  // });

  // const { data: workoutMates } = useQuery({
  //   queryKey: ["mates"],
  //   queryFn: () =>
  //     getMates({
  //       peferredTimes: [],
  //       workoutTypes: favoriteWorkouts.map(
  //         (workout: { code: string; name: string }) => workout.code,
  //       ),
  //     }),
  // });

  // const { data: timeMates } = useQuery({
  //   queryKey: ["mates"],
  //   queryFn: () =>
  //     getMates({ peferredTimes: preferredWorkoutTime, workoutTypes: [] }),
  // });

  const workoutMates: MateInfo[] = [
    {
      id: 1,
      profileUrl: "/icons/Kakao_logo.png",
      nickname: "닉네임입니다",
      gender: "F",
      skillLevel: "BEGINNER",
      introduction: "안녕하세요. 자기소개입니다.",
      preferredWorkoutTime: ["WEEKDAY_MORNING"],
      favoriteWorkouts: [
        {
          code: "GYM",
          name: "헬스",
        },
      ],
    },
    {
      id: 1,
      profileUrl: "/icons/Kakao_logo.png",
      nickname: "닉네임입니다",
      gender: "F",
      skillLevel: "BEGINNER",
      introduction: "안녕하세요. 자기소개입니다.",
      preferredWorkoutTime: ["WEEKDAY_MORNING"],
      favoriteWorkouts: [
        {
          code: "GYM",
          name: "헬스",
        },
      ],
    },
    {
      id: 1,
      profileUrl: "/icons/Kakao_logo.png",
      nickname: "닉네임입니다",
      gender: "F",
      skillLevel: "BEGINNER",
      introduction: "안녕하세요. 자기소개입니다.",
      preferredWorkoutTime: ["WEEKDAY_MORNING"],
      favoriteWorkouts: [
        {
          code: "GYM",
          name: "헬스",
        },
      ],
    },
  ];
  const timeMates: MateInfo[] = [
    {
      id: 1,
      profileUrl: "/icons/Kakao_logo.png",
      nickname: "닉네임입니다",
      gender: "F",
      skillLevel: "BEGINNER",
      introduction: "안녕하세요. 자기소개입니다.",
      preferredWorkoutTime: ["WEEKDAY_MORNING"],
      favoriteWorkouts: [
        {
          code: "GYM",
          name: "헬스",
        },
      ],
    },
    {
      id: 1,
      profileUrl: "/icons/Kakao_logo.png",
      nickname: "닉네임입니다",
      gender: "F",
      skillLevel: "BEGINNER",
      introduction: "안녕하세요. 자기소개입니다.",
      preferredWorkoutTime: ["WEEKDAY_MORNING"],
      favoriteWorkouts: [
        {
          code: "GYM",
          name: "헬스",
        },
      ],
    },
    {
      id: 1,
      profileUrl: "/icons/Kakao_logo.png",
      nickname: "닉네임입니다",
      gender: "F",
      skillLevel: "BEGINNER",
      introduction: "안녕하세요. 자기소개입니다.",
      preferredWorkoutTime: ["WEEKDAY_MORNING"],
      favoriteWorkouts: [
        {
          code: "GYM",
          name: "헬스",
        },
      ],
    },
  ];
  const regionMates: MateInfo[] = [
    {
      id: 1,
      profileUrl: "/icons/Kakao_logo.png",
      nickname: "닉네임입니다",
      gender: "F",
      skillLevel: "BEGINNER",
      introduction: "안녕하세요. 자기소개입니다.",
      preferredWorkoutTime: ["WEEKDAY_MORNING"],
      favoriteWorkouts: [
        {
          code: "GYM",
          name: "헬스",
        },
      ],
    },
    {
      id: 1,
      profileUrl: "/icons/Kakao_logo.png",
      nickname: "닉네임입니다",
      gender: "F",
      skillLevel: "BEGINNER",
      introduction: "안녕하세요. 자기소개입니다.",
      preferredWorkoutTime: ["WEEKDAY_MORNING"],
      favoriteWorkouts: [
        {
          code: "GYM",
          name: "헬스",
        },
      ],
    },
    {
      id: 1,
      profileUrl: "/icons/Kakao_logo.png",
      nickname: "닉네임입니다",
      gender: "F",
      skillLevel: "BEGINNER",
      introduction: "안녕하세요. 자기소개입니다.",
      preferredWorkoutTime: ["WEEKDAY_MORNING"],
      favoriteWorkouts: [
        {
          code: "GYM",
          name: "헬스",
        },
      ],
    },
  ];

  const UserGroups = [
    {
      title: "📍 같은 동네에 있어요",
      description: "같은 신천동에 있는 메이트",
      userList: regionMates,
    },
    {
      title: "👊🏻 선호 운동이 일치해요",
      description: "선호하는 운동이 일치한 메이트",
      userList: workoutMates,
    },
    {
      title: "⏱️ 선호 운동 시간이 일치해요",
      description: "선호 운동 시간대가 일치한 메이트",
      userList: timeMates,
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
