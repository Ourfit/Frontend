import SecondStepBarIcon from "@/assets/images/secondStepBar.svg";
import * as S from "./RegistrationStepTitle.style";

const RegistrationStepTitle2 = ({ onNext }: { onNext: () => void }) => {
  return (
    <>
        <SecondStepBarIcon width={36} height={36} />
        <S.TitleContainer2>
          <S.TitleWrapper>
            <S.TitleContent>매주</S.TitleContent>
            <S.PointContent>어떤 요일</S.PointContent>
            <S.TitleContent>에 운동할까요?</S.TitleContent>
          </S.TitleWrapper>
          <S.TitleDescriptionContent>앞서 설정한 횟수만큼 요일을 선택해 주세요.</S.TitleDescriptionContent>
        </S.TitleContainer2>
    </>
  );
};

export default RegistrationStepTitle2;
