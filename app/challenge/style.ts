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

// 검색
export const SearchContainer = styled.div<{ $isMatePage?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  background-color: ${({ $isMatePage }) =>
    $isMatePage ? COLORS.BASE_WHITE : "transparent"};  // /challenge/mate일 경우 BASE_WHITE 배경색 적용
`;

export const Search2Container = styled.div<{ $isMatePage?: boolean }>`
  border-radius: 20px;
  width: 85%; 
  flex-shrink: 0; 
  background-color: ${({ $isMatePage }) =>
    $isMatePage ? COLORS.BASE_WHITE : "transparent"};  
  scroll-snap-align: start; 
`;

export const MateChallengeContainer = styled.div<{ $isMatePage?: boolean }>`
  border-radius: 20px;
  width: 85%; 
  height: auto;
  flex-shrink: 0; 
  background-color: ${({ $isMatePage }) =>
    $isMatePage ? COLORS.BASE_WHITE : "transparent"};  
  scroll-snap-align: start; 
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const SubContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  gap: 16px;
  padding-left: 5%;
  padding-bottom: 48px;
  overflow-x: auto; // 수평 스크롤 자동 추가 
  white-space: nowrap; 
  &::-webkit-scrollbar {
    display: none; 
  }
`;

export const SubContent2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding-left: 5%;
  padding-bottom: 5%;
  overflow-x: auto; // 수평 스크롤 자동 추가 
  white-space: nowrap; 
  &::-webkit-scrollbar {
    display: none; 
  }
`;
