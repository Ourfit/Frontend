import styled from "styled-components";
import { COLORS } from "@/constants/Theme";

export const TabContainer = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  border-bottom: 1px solid ${COLORS.GRAYSCALE_100};
`;

export const Tablist = styled.ul`
  display: flex;
  gap: 16px;
  height: 44px; /* 탭 리스트의 높이 고정 */
  padding-left: 20px;
`;

export const TabItem = styled.li<{ $prevTab: boolean }>`
  position: relative;
  color: ${(props) =>
    props.$prevTab ? COLORS.BLUE_500 : COLORS.GRAYSCALE_400};
  list-style: none;
  cursor: pointer;
  height: 100%;
  line-height: 40px;
  border-bottom: ${(props) => (props.$prevTab ? "2px" : "1px")} solid
    ${(props) => (props.$prevTab ? COLORS.BLUE_500 : COLORS.GRAYSCALE_100)};
`;

export const NotificationBadge = styled.span`
  position: absolute;
  height: 4px;
  width: 4px;
  background-color: ${COLORS.BLUE_500};
  border-radius: 50%;
  right: -4px;
  top: 8px;
`;
