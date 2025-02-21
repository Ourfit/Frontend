import styled from "styled-components";
import bgImage from "@/assets/images/bg-img.jpeg";
import { COLORS } from "@/constants/Theme";
import { TypographyCss } from "@/components/atoms/Typography";

export const LoginPageContainer = styled.div`
  background:
    linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%),
    url(${bgImage.src}) lightgray -122.808px 0px / 324.697% 100% no-repeat;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 184px;
  padding-bottom: 108.5px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  flex-grow: 1;

  & > svg {
    width: 72px;
    height: 34.04px;
    fill: ${COLORS.BASE_WHITE};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  color: ${COLORS.GRAYSCALE_100};

  & > span:first-child {
    font-weight: 300;
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 19.5px;
  width: 100%;
`;

export const Tooltip = styled.div`
  ${TypographyCss.H6Sb}

  background-color: ${COLORS.BASE_WHITE};
  padding: 8px 14px;
  color: ${COLORS.BLUE_500};
  border-radius: 8px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: calc(50% - 3.25px);
    border-top: 7.5px solid ${COLORS.BASE_WHITE};
    border-left: 4.5px solid transparent;
    border-right: 4.5px solid transparent;
    border-bottom: 7.5px solid none;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  background-color: #fae300;
  border: none;
  border-radius: 100px;
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  height: 50px;
  cursor: pointer;

  & > svg {
    width: 24px;
    height: 24px;
  }

  & > span {
    width: 120px;
  }
`;
