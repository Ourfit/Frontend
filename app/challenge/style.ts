import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const PageContainer = styled.div<{
  $bgColorGray?: boolean;
}>`
  display: flex;            
  flex-direction: column;   
  flex-grow: 1;
  box-sizing: border-box;
  background-color: ${({ $bgColorGray = false }) =>
    $bgColorGray ? "#F6F6F8" : "#ffffff"};
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const ContentContainer = styled.div`
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

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const SubContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  padding-bottom: 24px;
  flex-grow: 1; 
`;

export const Content = styled.div`
  color: ${COLORS.GRAYSCALE_500};
`;

export const Button = styled.button`
  background-color: ${COLORS.BLUE_500};
  color: ${COLORS.BASE_WHITE};
`;
