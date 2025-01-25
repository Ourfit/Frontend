import ChevronRightIcon from "@/assets/images/chevron-right-small.svg";
import { useRouter } from "next/navigation";
import * as S from "./UserSectionTitle.style";
import { Typography } from "@/components/atoms/Typography";

interface UserSectionTitleProps {
  title: string;
  description: string;
}

export default function UserSectionTitle({
  title,
  description,
}: UserSectionTitleProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push("/mate");
  };

  return (
    <S.TitleContainer>
      <S.TitleWrapper>
        <Typography.H2Bd>{title}</Typography.H2Bd>
        <Typography.H5Md>ㅇㅇㅇ님과 {description}</Typography.H5Md>
      </S.TitleWrapper>
      <S.SeeMoreButton onClick={handleClick}>
        <Typography.H5Md>더보기</Typography.H5Md>
        <ChevronRightIcon />
      </S.SeeMoreButton>
    </S.TitleContainer>
  );
}
