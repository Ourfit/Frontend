"use client";

import UserSectionTitle from "./UserSectionTitle";
import * as S from "./UserSection.style";
import UserList from "./UserList";

export default function UserSection() {
  const UserGroups = [
    {
      title: "📍 같은 동네에 있어요",
      description: "같은 신천동에 있는 메이트",
      userList: [1, 2, 3, 4],
    },
    {
      title: "👊🏻 선호 운동이 일치해요",
      description: "선호하는 운동이 일치한 메이트",
      userList: [5, 6, 7, 8],
    },
    {
      title: "⏱️ 선호 운동 시간이 일치해요",
      description: "선호 운동 시간대가 일치한 메이트",
      userList: [9, 10, 11, 12],
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
          <UserList userList={group.userList} />
        </S.UserSectionWrapper>
      ))}
    </S.UserSectionContainer>
  );
}
