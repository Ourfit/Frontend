import Button from "@/components/common/Button";
import * as S from "./MateCard.style";

const MateCard = () => {
  return (
    <S.ContentContainer>
      <S.Content>아직 등록한 챌린지지가 없어요!</S.Content>
      <Button size="xs" variant="primary"  disabled={false} >
        챌린지 등록
      </Button>
    </S.ContentContainer>
  );
};

export default MateCard;
