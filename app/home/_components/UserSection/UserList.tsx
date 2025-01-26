import MorningIcon from "@/assets/images/morning.svg";
import EveningIcon from "@/assets/images/evening.svg";
import AfternoonIcon from "@/assets/images/afternoon.svg";
import DumbbellsIcon from "@/assets/images/dumbbells.svg";
import * as S from "./UserList.style";
import Image from "next/image";
import { Typography } from "@/components/atoms/Typography";

const ICONS = {
  아침: <MorningIcon />,
  낮: <AfternoonIcon />,
  저녁: <EveningIcon />,
};

interface UserListProps {
  idx: number;
  userList: {
    userId: number;
    name: string;
    age: number;
    sports: string[];
    time: string;
  }[];
}

export default function UserList({ idx, userList }: UserListProps) {
  return (
    <S.UserListContainer>
      {userList.length ? (
        <S.UserListWrapper>
          {userList.map(({ userId, name, age, time, sports }) => {
            const word = time.split(" ").at(-1) as "아침" | "낮" | "저녁";

            return (
              <S.UserWrapper key={userId}>
                <S.ProfileBadge>
                  <S.ProfileImageWrapper>
                    <Image
                      src="/icons/Kakao_logo.png"
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
                    <Typography.H4Sb>{name}</Typography.H4Sb>
                    <Typography.H6Md>{age}세</Typography.H6Md>
                  </S.UserInfo>
                  <S.ExercisePreferences>
                    <S.PreferenceBadge $isHighlighted={idx === 1}>
                      {sports.length > 1
                        ? `${sports[0]} + ${sports.length - 1}`
                        : sports[0]}
                    </S.PreferenceBadge>
                    <S.PreferenceBadge $isHighlighted={idx === 2}>
                      {ICONS[word]}
                      {time}
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
