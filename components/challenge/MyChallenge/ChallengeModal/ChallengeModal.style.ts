import styled from "styled-components";
import { COLORS } from "@/constants/Theme";

export const MenuContainer = styled.ul`
  position: absolute;
  right: 3px;
  top: 61px;
  display: flex;
  flex-direction: column;
  width: 166px;
  border-radius: 12px;
  box-shadow: 0 0 32px 0 rgba(0, 0, 0, 0.2);
  background-color: ${COLORS.BASE_WHITE};
`;

export const MenuItem = styled.li<{ color: string }>`
  list-style-type: none;
  height: 44px;
  color: ${(props) => props.color};
  width: 100%;
  padding: 11.5px 16px;
  cursor: pointer;
  &:first-child {
    border-bottom: 0.5px solid rgba(128, 128, 128, 0.55);
  }
`;
