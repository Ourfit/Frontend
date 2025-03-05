import { Typography } from "@/components/atoms/Typography";
import ProfileImgBadge from "@/components/common/DefaultProfileImg/ProfileImgBadge";
import EmptyComponent from "../EmptyComponet/EmptyComponent";
import * as S from "./MateCard.style";
import { useRouter } from "next/navigation";

export default function MateCard() {
  const router = useRouter();

  return (
    <S.CardContainer>
      <S.CardWrapper>
        <S.MateProfile>
          <S.BasicInfoWrapper>
            <ProfileImgBadge imageUrl="" />
            <S.BasicInfo>
              <Typography.H4Sb>중수다람쥐</Typography.H4Sb>
              <Typography.H5Md>여, 27세</Typography.H5Md>
            </S.BasicInfo>
          </S.BasicInfoWrapper>
          <S.LevelBadge>운동초보</S.LevelBadge>
        </S.MateProfile>
        <S.Divider />
        <S.MainContent>
          <EmptyComponent
            title="아직 등록한 챌린지가 없어요!"
            buttonContent="챌린지 등록"
            onClick={() => router.push("/challenge/registration")}
          />
        </S.MainContent>
      </S.CardWrapper>
    </S.CardContainer>
  );
}
