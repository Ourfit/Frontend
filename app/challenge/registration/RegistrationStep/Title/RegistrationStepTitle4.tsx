import FourStepBarIcon from "@/assets/images/fourthStepBar.svg";
import * as S from "./RegistrationStepTitle.style";

const RegistrationStepTitle4 = ({ onNext }: { onNext: () => void }) => {
  return (
    <>
        <FourStepBarIcon width={36} height={36} />
        <S.TitleContainer2>
          <S.TitleWrapper>
            <S.PointContent>언제부터</S.PointContent>
            <S.TitleContent>시작할까요?</S.TitleContent>
          </S.TitleWrapper>
          <S.TitleDescriptionContent>챌린지의 시작 기간은 나중에 수정할 수 없어요.</S.TitleDescriptionContent>
        </S.TitleContainer2>
    </>
  );
};

export default RegistrationStepTitle4;
