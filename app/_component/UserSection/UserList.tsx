import EveningIcon from "@/assets/images/evening.svg";
import DumbbellsIcon from "@/assets/images/dumbbells.svg";
import * as S from "./UserSection.style";
import Image from "next/image";
import { Typography } from "@/components/atoms/Typography";

interface UserListProps {
  userList: number[];
}

export default function UserList({ userList }: UserListProps) {
  return (
    <S.UserListContainer>
      {userList.length ? (
        userList.map((e) => (
          <S.UserWrapper key={e}>
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
                <Typography.H4Sb>초보다람쥐</Typography.H4Sb>
                <Typography.H6Md>27세</Typography.H6Md>
              </S.UserInfo>
              <S.ExercisePreferences>
                <S.PreferenceBadge>헬스</S.PreferenceBadge>
                <S.PreferenceBadge>
                  <EveningIcon />
                  주말저녁
                </S.PreferenceBadge>
              </S.ExercisePreferences>
            </S.UserInfoWrapper>
          </S.UserWrapper>
        ))
      ) : (
        <div></div>
      )}
    </S.UserListContainer>
  );
}
