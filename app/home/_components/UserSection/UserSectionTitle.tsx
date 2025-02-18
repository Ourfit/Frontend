import ChevronRightIcon from "@/assets/images/chevron-right-small.svg";
import * as S from "./UserSectionTitle.style";
import { Typography } from "@/components/atoms/Typography";
import Link from "next/link";

interface UserSectionTitleProps {
  title: string;
  description: string;
  nickname: string;
}

export default function UserSectionTitle({
  title,
  description,
  nickname,
}: UserSectionTitleProps) {
  return (
    <S.TitleContainer>
      <S.TitleWrapper>
        <Typography.H2Bd>{title}</Typography.H2Bd>
        <Typography.H5Md>
          {nickname}님과 {description}
        </Typography.H5Md>
      </S.TitleWrapper>
      <S.SeeMoreButton>
        <Link href={"/mate"}>
          <Typography.H5Md>더보기</Typography.H5Md>
        </Link>

        <ChevronRightIcon />
      </S.SeeMoreButton>
    </S.TitleContainer>
  );
}
