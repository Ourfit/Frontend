import { Typography } from "@/components/atoms/Typography";
import * as S from "./NotificationList.style";
import ListItem from "@/app/mypage/mate-history/_components/ListItem";
import { MateHistory } from "@/types/mates";

interface NotificationListProps {
  list: MateHistory[];
  isPrev?: boolean;
  ref?: (node?: Element | null) => void;
}

export default function NotificationList({
  list,
  isPrev,
  ref,
}: NotificationListProps) {
  return (
    <S.ListContainer>
      <Typography.H4Md>{isPrev ? "이전" : "오늘"}</Typography.H4Md>
      <S.ListItemWrapper>
        {list.map((item) => {
          const isReceive = item.actionType === "RECEIVE";

          return (
            <ListItem
              key={item.id}
              title={isReceive ? "메이트 신청" : "메이트 수락"}
              data={item}
              isPrev={isPrev}
            >
              <span>
                {isReceive ? item.actorNickname : item.targetNickname}
              </span>
              님이 메이트 신청을
              {isReceive ? " 보냈어요!" : " 수락했어요!"}
            </ListItem>
          );
        })}
        {isPrev && <div ref={ref} />}
      </S.ListItemWrapper>
    </S.ListContainer>
  );
}
