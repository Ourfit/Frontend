import Button from "@/components/common/Button";
import * as S from "./MateProfile.style";
import ProfileImageIcon from "@/assets/images/ProfileImage.svg";

const MateProfile = () => {
  return (
    <S.ProfileContainer>
      <S.LeftContainer>
        <S.IconWrapper>
          <ProfileImageIcon />
        </S.IconWrapper>
        <S.TextContainer>
          <S.ProfileName>중수다람쥐</S.ProfileName>
          <S.ProfileInfo>여, 27세</S.ProfileInfo>
        </S.TextContainer>
      </S.LeftContainer>
      <S.PrimaryButton>운동초보</S.PrimaryButton>
    </S.ProfileContainer>
  );
};

export default MateProfile;
