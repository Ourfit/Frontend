import Badge1Icon from "@/assets/images/badge1.svg";
import CheckGrayIcon from "@/assets/images/checkGray.svg";
import * as RS from "./RegistrationStep/Title/RegistrationStepTitle.style";
import * as S from "./style";

const RegistrationFinish = ({
  selectedDate,
  onNext,
}: {
  selectedDate: Date | null;
  onNext: () => void;
}) => {
  const formatDate = (date: Date | null) => {
    if (!date) return "";
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  };

  return (
    <S.MainContainer>
      <S.TitleContainer>
        <S.SubTitle>축하드려요</S.SubTitle>
        <RS.TitleWrapper>
          <S.Title>챌린지 등록 완료!</S.Title>
        </RS.TitleWrapper>
      </S.TitleContainer>
      <S.IconWrapper>
        <Badge1Icon />
      </S.IconWrapper>
      <S.DescriptionWrapper>
        <S.ContentWrapper>
          <CheckGrayIcon />
          <S.FinishContentWrapper>
            <RS.Content>챌린지 시작일은</RS.Content>
            <RS.PointDateContent>
              {selectedDate ? formatDate(selectedDate) : "날짜 미정"}
            </RS.PointDateContent>
            <RS.Content>이에요</RS.Content>
          </S.FinishContentWrapper>
        </S.ContentWrapper>
        <S.ContentWrapper>
          <CheckGrayIcon />
          <S.FinishContentWrapper>
            <RS.Content>설정한</RS.Content>
            <RS.PointDateContent>요일은</RS.PointDateContent>
            <RS.Content>나중에 변경할 수 있어요</RS.Content>
          </S.FinishContentWrapper>
        </S.ContentWrapper>
      </S.DescriptionWrapper>
    </S.MainContainer>
  );
};

export default RegistrationFinish;
