import { Typography } from "@/components/atoms/Typography";
import * as S from "./NotificationList.style";
import ListItem from "@/components/common/ListItem/ListItem";

interface NotificationListProps {
  list: {
    id: number;
    date: string;
    type: string;
    name: string;
    isRead: boolean;
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
        <ListItem key={item.id} title="메이트 신청" data={item}>
          <span>{item.name}</span>님이 메이트 신청을
          {item.type === "request" ? " 보냈어요!" : " 수락했어요!"}
        </ListItem>
      ))}
    </S.ListContainer>
  );
}
