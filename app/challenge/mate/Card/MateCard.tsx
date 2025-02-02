"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/common/Button";
import * as S from "../Card/MateCard.style";

const MateCard = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/challenge/registration"); 
  };

  return (
    <S.ContentContainer>
      <S.Content>아직 등록한 챌린지가 없어요!</S.Content>
      <Button size="xs" variant="primary" disabled={false} onClick={handleNavigate}>
        챌린지 등록
      </Button>
    </S.ContentContainer>
  );
};

export default MateCard;
