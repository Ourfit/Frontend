import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
  height: 178px;
  background-color: ${COLORS.BLUE_500};
  color: #ffffff;
  position: relative;
  overflow: hidden;
  cursor: pointer;
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
