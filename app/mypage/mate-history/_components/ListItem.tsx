import BellIcon from "@/assets/images/bell.svg";
import ChevronRightIcon from "@/assets/images/chevron-right.svg";
import * as S from "./ListItem.style";
import { Typography } from "@/components/atoms/Typography";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { dateFormat } from "@/utils/monthList";
import DefaultProfileImg from "@/components/common/DefaultProfileImg/DefaultProfileImg";
import { useState } from "react";
import { MateHistory } from "@/types/mates";
import { api } from "@/services/axiosInterceptor";

interface ListItemProps {
  title: string;
  data: MateHistory;
  children: React.ReactNode;
  hasArrowButton?: boolean;
  isPrev?: boolean;
}

export default function ListItem({
  title,
  data,
  children,
  hasArrowButton = true,
  isPrev,
}: ListItemProps) {
  const [imgError, setImgError] = useState(false);
  const router = useRouter();
  const pathName = usePathname();

  const notificationReadReq = async (historyId: number) => {
    await api.patch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/mates/history/${historyId}/read`,
    );
  };

  const handleClick = () => {
    if (data.actionType === "APPLY")
      router.push(
        `/mate/mateprofile/${encodeURIComponent(data.targetNickname)}`,
      );

    if (pathName === "/notifications") {
      if (!data.isRead) notificationReadReq(data.id);
      router.push(
        `/mate/mateprofile/${encodeURIComponent(data.actionType === "RECEIVE" ? data.actorNickname : data.targetNickname)}`,
      );
    }
  };

  return (
    <S.ItemContainer
      $isRead={data.isRead}
      $isPrev={isPrev}
      onClick={handleClick}
    >
      <S.ItemWrapper>
        {data.actionType === "APPLY" || pathName === "/notifications" ? (
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
