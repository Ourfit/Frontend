import BellIcon from "@/assets/images/bell.svg";
import ChevronRightIcon from "@/assets/images/chevron-right.svg";
import * as S from "./ListItem.style";
import { Typography } from "@/components/atoms/Typography";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ListItemProps {
  title: string;
  data: {
    id: number;
    date: string;
    name: string;
    image?: string;
    isRead?: boolean;
    type?: string;
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
  const router = useRouter();

  const handleClick = () => {
    // router.push(`/mate/mateprofile/${encodeURIComponent(data.name)}`);
    if (data.type === "request")
      router.push(`/mate/mateprofile/${encodeURIComponent("주녕이")}`);
  };

  return (
    <S.ItemContainer $isRead={data.isRead} onClick={handleClick}>
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
