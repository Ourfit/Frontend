import { Typography } from "@/components/atoms/Typography";
import * as S from "./EmptyComponent.style";
import Button from "@/components/common/Button";

export default function EmptyComponent({
  title,
  buttonContent,
  onClick,
  isMine,
}: {
  title: string;
  buttonContent: string;
  onClick: () => void;
  isMine?: boolean;
}) {
  return (
    <S.EmptyContainer>
      <Typography.H4Md>{title}</Typography.H4Md>
      {isMine && (
        <Button size="xs" variant="primary" disabled={false} onClick={onClick}>
          {buttonContent}
        </Button>
      )}
    </S.EmptyContainer>
  );
}
