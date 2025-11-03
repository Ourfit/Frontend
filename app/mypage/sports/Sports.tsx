import Dumbbels from "@/assets/images/dumbbells.svg";
import { Typography } from "@/components/atoms/Typography";
import { useMyPageInfo } from "@/hooks/queries/useMypageInfo";
import Link from "next/link";
import * as S from "./style";

interface WorkoutProps {
  code: string;
  name: string;
}

export default function Sports() {
  const { data: userInfo } = useMyPageInfo();
  return (
    <S.PreferenceSectionWrapper>
      <S.PreferenceHeader>
        <S.PreferenceTitle>
          선호 운동
          <Typography.H3Bd
            style={{ marginLeft: "4px", color: "#004DFF" }}
          ></Typography.H3Bd>
        </S.PreferenceTitle>
        <Link href="/mypage/sports">
          <S.PreferenceEdit>편집</S.PreferenceEdit>
        </Link>
      </S.PreferenceHeader>

      <S.PreferenceContent>
        {userInfo?.favoriteWorkouts?.map(
          (workout: WorkoutProps, index: number) => (
            <S.PreferenceBadge key={`${workout.code}-${index}`}>
              <Dumbbels color={"#004DFF"} />
              <Typography.H4Md>{workout.name}</Typography.H4Md>
            </S.PreferenceBadge>
          ),
        )}
      </S.PreferenceContent>
    </S.PreferenceSectionWrapper>
  );
}
