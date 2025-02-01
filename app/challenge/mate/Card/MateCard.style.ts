import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  height: 70%;

  & > svg {
    width: 20px;
    height: 20px;
    color: ${COLORS.GRAYSCALE_800};
  }

  // 구분선
  text-align: center;
  position: relative;
  padding-top: 16px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 90%;
    height: 1px;
    background-color: ${COLORS.GRAYSCALE_100};
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  & > svg {
    width: 20px;
    height: 20px;
    color: ${COLORS.GRAYSCALE_800};
  }
`;

export const Content = styled.div`
  color: ${COLORS.GRAYSCALE_500};
`;

export const Button = styled.button`
  background-color: ${COLORS.BLUE_500};
  color: ${COLORS.BASE_WHITE};
`;

