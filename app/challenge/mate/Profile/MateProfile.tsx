import ProfileImageIcon from "@/assets/images/ProfileImage.svg";
import MoreButtonIcon from "@/assets/images/moreButton.svg";
import * as S from "./MateProfile.style";
import { useState, useEffect } from "react";

const MateProfile = () => {
  const [isMateChallengePage, setIsMateChallengePage] = useState(false);
  const [isSelectBoxVisible, setIsSelectBoxVisible] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setIsMateChallengePage(currentPath === "/challenge/mateChallenge");
  }, []);

  const handleMoreButtonClick = () => {
    setIsSelectBoxVisible(!isSelectBoxVisible);
  };

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
      {isMateChallengePage ? (
        <S.RigthContainer>
          <S.MoreButton
            $isMateChallengePage={isMateChallengePage}
            onClick={handleMoreButtonClick}
          >
            <MoreButtonIcon />
          </S.MoreButton>
          {isSelectBoxVisible && (
            <S.SelectBox>
              <S.SelectOption color="#000">챌린지 수정하기</S.SelectOption>
              <S.SelectOption color="#FA6767">챌린지 삭제하기</S.SelectOption>
            </S.SelectBox>
          )}
        </S.RigthContainer>
      ) : (
        <S.PrimaryButton>운동 초보</S.PrimaryButton>
      )}
    </S.ProfileContainer>
  );
};

export default MateProfile;
