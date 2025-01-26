import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
  height: 178px;
  background-color: ${COLORS.BLUE_500};
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

export const BannerWrapper = styled.div`
  max-width: 390px;
  height: 100%;
  width: 100%;
  color: #ffffff;
  position: relative;
`;

export const BannerContent = styled.div`
  position: absolute;
  top: 49px;
  left: 30px;
`;

export const Content = styled.div`
  margin-top: 13px;
  display: flex;
  align-items: center;
  gap: 2px;

  & > svg {
    width: 16px;
    height: 16px;
  }
`;

export const Circle = styled.div`
  position: absolute;
  width: 312px;
  height: 312px;
  left: 195px;
  top: -63px;
  border-radius: 50%;
  background-color: ${COLORS.BLUE_800};
`;

export const ImageWrapper = styled.div`
  & > svg {
    &:first-child {
      width: 50.72px;
      height: 21.48px;
      position: absolute;
      left: 280px;
      top: 41px;
    }

    &:last-child {
      width: 159px;
      height: 132px;
      position: absolute;
      left: 213px;
      top: 59px;
    }
  }
`;
