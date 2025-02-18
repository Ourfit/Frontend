"use client";

import UserSectionTitle from "./UserSectionTitle";
import * as S from "./UserSection.style";
import UserList from "./UserList";
import { MateInfo } from "@/types/mates";

interface UserSectionType {
  data: {
    workoutMates: MateInfo[];
    timeMates: MateInfo[];
    regionMates: MateInfo[];
  };
}

export default function UserSection({ data }: UserSectionType) {
  const UserGroups = [
    {
      title: "📍 같은 동네에 있어요",
      description: "같은 신천동에 있는 메이트",
      userList: data.regionMates,
    },
    {
      title: "👊🏻 선호 운동이 일치해요",
      description: "선호하는 운동이 일치한 메이트",
      userList: data.workoutMates,
    },
    {
      title: "⏱️ 선호 운동 시간이 일치해요",
      description: "선호 운동 시간대가 일치한 메이트",
      userList: data.timeMates,
    },
  ];

  return (
    <S.UserSectionContainer>
      {UserGroups.map((group, idx) => (
        <S.UserSectionWrapper key={idx}>
          <UserSectionTitle
            title={group.title}
            description={group.description}
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
