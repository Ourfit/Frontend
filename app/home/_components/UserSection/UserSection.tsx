"use client";

import UserSectionTitle from "./UserSectionTitle";
import * as S from "./UserSection.style";
import UserList from "./UserList";

export default function UserSection() {
  const UserGroups = [
    {
      title: "📍 같은 동네에 있어요",
      description: "같은 신천동에 있는 메이트",
      userList: [
        {
          userId: 1,
          name: "초보다람쥐",
          age: 27,
          sports: ["헬스", "헬스"],
          time: "주말 저녁",
        },
        {
          userId: 2,
          name: "초보다람쥐",
          age: 27,
          sports: ["헬스"],
          time: "주말 아침",
        },
        {
          userId: 3,
          name: "초보다람쥐",
          age: 27,
          sports: ["헬스"],
          time: "평일 낮",
        },
        {
          userId: 4,
          name: "초보다람쥐",
          age: 27,
          sports: ["헬스"],
          time: "평일 낮",
        },
      ],
    },
    {
      title: "👊🏻 선호 운동이 일치해요",
      description: "선호하는 운동이 일치한 메이트",
      userList: [
        {
          userId: 5,
          name: "초보다람쥐",
          age: 27,
          sports: ["헬스"],
          time: "주말 저녁",
        },
        {
          userId: 6,
          name: "초보다람쥐",
          age: 27,
          sports: ["헬스"],
          time: "주말 저녁",
        },
      ],
    },
    {
      title: "⏱️ 선호 운동 시간이 일치해요",
      description: "선호 운동 시간대가 일치한 메이트",
      userList: [],
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
          <UserList idx={idx} userList={group.userList} />
        </S.UserSectionWrapper>
      ))}
    </S.UserSectionContainer>
  );
}
