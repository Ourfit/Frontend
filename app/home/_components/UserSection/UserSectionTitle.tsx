import ChevronRightIcon from "@/assets/images/chevron-right-small.svg";
import * as S from "./UserSectionTitle.style";
import { Typography } from "@/components/atoms/Typography";
import Link from "next/link";
import { useMateFilterStore } from "@/stores/mateFilterStore";
import { GROUP_TYPES } from "@/constants/User";
import { PreferredWorkoutTime } from "@/types/user";

interface UserSectionTitleProps {
  type: string;
  title: string;
  description: string;
  nickname: string;
  favoriteWorkouts: { code: string; name: string }[];
  preferredWorkoutTime: PreferredWorkoutTime;
}

export default function UserSectionTitle({
  type,
  title,
  description,
  nickname,
  favoriteWorkouts,
  preferredWorkoutTime,
}: UserSectionTitleProps) {
  const { addFilter, resetFilter } = useMateFilterStore();

  const handleClick = () => {
    if (favoriteWorkouts && preferredWorkoutTime) {
      if (type === GROUP_TYPES.WORKOUT) {
        addFilter({
          time: null,
          sports: favoriteWorkouts.map((workout) => workout.code),
        });
      } else if (type === GROUP_TYPES.TIME) {
        addFilter({
          time: preferredWorkoutTime,
          sports: [],
        });
      } else resetFilter();
    }
  };

  return (
    <S.TitleContainer>
      <S.TitleWrapper>
        <Typography.H2Bd>{title}</Typography.H2Bd>
        <Typography.H5Md>
          {nickname}님과 {description}
        </Typography.H5Md>
      </S.TitleWrapper>
      <S.SeeMoreButton onClick={handleClick}>
        <Link href={"/mate/explore"}>
          <Typography.H5Md>더보기</Typography.H5Md>
        </Link>

        <ChevronRightIcon />
      </S.SeeMoreButton>
    </S.TitleContainer>
  );
}
