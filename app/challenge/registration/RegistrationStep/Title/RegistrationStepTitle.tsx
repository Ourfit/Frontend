import FirstStepBarIcon from "@/assets/images/firstStepBar.svg";
import * as S from "./RegistrationStepTitle.style";

const RegistrationStepTitle = ({ onNext }: { onNext: () => void }) => {
  return (
    <>
      <FirstStepBarIcon width={36} height={36} />
      <S.TitleContainer2>
        <S.TitleWrapper>
          <S.TitleContent>매주</S.TitleContent>
          <S.PointContent>몇 회</S.PointContent>
          <S.TitleContent>운동할까요?</S.TitleContent>
        </S.TitleWrapper>
        <S.TitleDescriptionContent>
          나중에 운동 횟수를 변경할 수 없어요.
        </S.TitleDescriptionContent>
      </S.TitleContainer2>
    </>
  );
};

export default RegistrationStepTitle;
