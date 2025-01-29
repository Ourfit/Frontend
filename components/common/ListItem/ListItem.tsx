import BellIcon from "@/assets/images/bell.svg";
import ChevronRightIcon from "@/assets/images/chevron-right.svg";
import * as S from "./ListItem.style";
import { Typography } from "@/components/atoms/Typography";

interface ListItemProps {
  title: string;
  data: {
    id: number;
    date: string;
    name: string;
    isRead?: boolean;
  };
  children: React.ReactNode;
}

export default function ListItem({ title, data, children }: ListItemProps) {
  return (
    <S.ItemContainer $isRead={data.isRead}>
      <S.ItemWrapper>
        <S.IconWrapper>
          <BellIcon />
        </S.IconWrapper>
        <S.ContentWrpper>
          <S.Content>
            <Typography.H4Sb>{title}</Typography.H4Sb>
            <Typography.H6Md>{data.date}</Typography.H6Md>
          </S.Content>
          <Typography.H5Md>{children}</Typography.H5Md>
        </S.ContentWrpper>
      </S.ItemWrapper>
      <ChevronRightIcon />
    </S.ItemContainer>
  );
}
