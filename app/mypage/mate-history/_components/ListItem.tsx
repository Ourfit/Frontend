import BellIcon from "@/assets/images/bell.svg";
import ChevronRightIcon from "@/assets/images/chevron-right.svg";
import * as S from "./ListItem.style";
import { Typography } from "@/components/atoms/Typography";
import Image from "next/image";

interface ListItemProps {
  title: string;
  data: {
    id: number;
    date: string;
    name: string;
    image?: string;
    isRead?: boolean;
  };
  children: React.ReactNode;
  hasArrowButton?: boolean;
}

export default function ListItem({
  title,
  data,
  children,
  hasArrowButton = true,
}: ListItemProps) {
  return (
    <S.ItemContainer $isRead={data.isRead}>
      <S.ItemWrapper>
        {data.image ? (
          <S.ProfileImageWrapper>
            <Image
              src="/icons/Kakao_logo.png"
              alt="profile-image"
              width={40}
              height={40}
            />
          </S.ProfileImageWrapper>
        ) : (
          <S.IconWrapper>
            <BellIcon />
          </S.IconWrapper>
        )}
        <S.ContentWrpper>
          <S.Content>
            <Typography.H4Sb>{title}</Typography.H4Sb>
            <Typography.H6Md>{data.date}</Typography.H6Md>
          </S.Content>
          <Typography.H5Md>{children}</Typography.H5Md>
        </S.ContentWrpper>
      </S.ItemWrapper>
      {hasArrowButton && <ChevronRightIcon />}
    </S.ItemContainer>
  );
}
