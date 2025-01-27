import BannerImageSide from "@/assets/images/banner-img2.svg";
import BannerImage from "@/assets/images/banner-img1.svg";
import ArrowRightIcon from "@/assets/images/arrow_right.svg";
import { Typography } from "@/components/atoms/Typography";
import * as S from "./Banner.style";

export default function Banner() {
  return (
    <S.BannerContainer>
      <S.BannerWrapper>
        <S.BannerContent>
          <Typography.H2Bd>
            아워핏
            <br />
            이용법을 알려드려요!
          </Typography.H2Bd>
          <S.Content>
            <Typography.H4Md>자세히보기</Typography.H4Md>
            <ArrowRightIcon />
          </S.Content>
        </S.BannerContent>
        <S.Circle />
        <S.ImageWrapper>
          <BannerImageSide />
          <BannerImage />
        </S.ImageWrapper>
      </S.BannerWrapper>
    </S.BannerContainer>
  );
}
