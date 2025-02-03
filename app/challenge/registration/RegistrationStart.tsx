import Badge1Icon from "@/assets/images/badge1.svg";
import CheckGrayIcon from "@/assets/images/checkGray.svg";
import * as RS from "./RegistrationStep/Title/RegistrationStepTitle.style";
import * as S from "./style";

const RegistrationStart = ({ onNext }: { onNext: () => void }) => {
  return (
    <>
      <S.MainContainer>
        <S.TitleContainer>
          <S.SubTitle>메이트와 함께 도전할</S.SubTitle>
          <RS.TitleWrapper>
            <S.Title>운동 목표</S.Title>
            <S.NextTitle>를 설정할게요</S.NextTitle>
          </RS.TitleWrapper>
        </S.TitleContainer>
        <S.IconWrapper>
          <Badge1Icon />
        </S.IconWrapper>
        <S.DescriptionWrapper>
          <S.ContentWrapper>
            <S.GrayCheckIconWrapper>
              <CheckGrayIcon />
            </S.GrayCheckIconWrapper>
            <RS.Content>메이트랑 같은 도전 조건이 아니어도 돼요</RS.Content>
          </S.ContentWrapper>
          <S.ContentWrapper>
            <S.GrayCheckIconWrapper>
              <CheckGrayIcon />
            </S.GrayCheckIconWrapper>
            <RS.Content>
              도전 조건은 추후에 수정할 수 없어요(*요일 제외)
            </RS.Content>
          </S.ContentWrapper>
        </S.DescriptionWrapper>
      </S.MainContainer>
    </>
  );
};

export default RegistrationStart;
