import Button from "@/components/common/Button";
import * as S from "../mate/Card/MateCard.style";

const MateSearch = () => {
  return (
    <S.ContentContainer>
      <S.Content>아직 메이트가 없어요!</S.Content>
      <Button size="xs" variant="primary"  disabled={false} >
        메이트 찾기
      </Button>
    </S.ContentContainer>
  );
};

export default MateSearch;
