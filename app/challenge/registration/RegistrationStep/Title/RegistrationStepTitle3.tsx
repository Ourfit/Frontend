import ThirdStepBarIcon from "@/assets/images/thirdStepBar.svg";
import * as S from "./RegistrationStepTitle.style";

const RegistrationStepTitle3 = ({ onNext }: { onNext: () => void }) => {
  return (
    <>
        <ThirdStepBarIcon width={32} height={32} />
        <S.TitleContainer2>
          <S.TitleWrapper>
            <S.PointContent>얼마 동안</S.PointContent>
            <S.TitleContent>도전할까요?</S.TitleContent>
          </S.TitleWrapper>
          <S.TitleDescriptionContent>챌린지의 도전 기간은 나중에 수정할 수 없어요.</S.TitleDescriptionContent>
        </S.TitleContainer2>
    </>
  );
};

export default RegistrationStepTitle3;
