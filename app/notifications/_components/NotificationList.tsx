import { Typography } from "@/components/atoms/Typography";
import BellIcon from "@/assets/images/bell.svg";
import ChevronRightIcon from "@/assets/images/chevron-right.svg";
import * as S from "./NotificationList.style";

interface NotificationListProps {
  list: {
    id: number;
    type: string;
    name: string;
  }[];
  isPrev?: boolean;
}

export default function NotificationList({
  list,
  isPrev,
}: NotificationListProps) {
  return (
    <S.ListContainer>
      <Typography.H4Md>{isPrev ? "이전" : "오늘"}</Typography.H4Md>
      {list.map((item) => (
        <S.ItemContainer key={item.id}>
          <S.ItemWrapper>
            <S.IconWrapper>
              <BellIcon />
            </S.IconWrapper>
            <S.ContentWrpper>
              <S.Content>
                <Typography.H4Sb>메이트 신청</Typography.H4Sb>
                <Typography.H6Md>2024.12.24</Typography.H6Md>
              </S.Content>
              <Typography.H5Md>
                <span>{item.name}</span>님이 메이트 신청을
                {item.type === "request" ? " 보냈어요!" : " 수락했어요!"}
              </Typography.H5Md>
            </S.ContentWrpper>
          </S.ItemWrapper>
          <ChevronRightIcon />
        </S.ItemContainer>
      ))}
    </S.ListContainer>
  );
}
