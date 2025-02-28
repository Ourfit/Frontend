import BellIcon from "@/assets/images/bell.svg";
import ChevronRightIcon from "@/assets/images/chevron-right.svg";
import * as S from "./ListItem.style";
import { Typography } from "@/components/atoms/Typography";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { dateFormat } from "@/utils/monthList";
import DefaultProfileImg from "@/components/common/DefaultProfileImg/DefaultProfileImg";
import { useState } from "react";
import { MateHistory } from "@/types/mates";

interface ListItemProps {
  title: string;
  data: MateHistory;
  children: React.ReactNode;
  hasArrowButton?: boolean;
}

export default function ListItem({
  title,
  data,
  children,
  hasArrowButton = true,
}: ListItemProps) {
  const [imgError, setImgError] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    if (data.actionType === "APPLY")
      router.push(
        `/mate/mateprofile/${encodeURIComponent(data.targetNickname)}`,
      );
  };

  return (
    <S.ItemContainer $isRead={data.isRead} onClick={handleClick}>
      <S.ItemWrapper>
        {data.actionType === "APPLY" ? (
          <S.IconWrapper>
            <BellIcon />
          </S.IconWrapper>
        ) : data.targetProfileImageUrl && !imgError ? (
          <S.ProfileImageWrapper>
            <Image
              src={data.targetProfileImageUrl}
              alt="profile-image"
              width={40}
              height={40}
              onError={() => setImgError(true)}
            />
          </S.ProfileImageWrapper>
        ) : (
          <S.ProfileImageWrapper>
            <DefaultProfileImg />
          </S.ProfileImageWrapper>
        )}
        <S.ContentWrpper>
          <S.Content>
            <Typography.H4Sb>{title}</Typography.H4Sb>
            <Typography.H6Md>
              {dateFormat(new Date(data.createdAt), "alarm")}
            </Typography.H6Md>
          </S.Content>
          <Typography.H5Md>{children}</Typography.H5Md>
        </S.ContentWrpper>
      </S.ItemWrapper>
      {hasArrowButton && <ChevronRightIcon />}
    </S.ItemContainer>
  );
}
