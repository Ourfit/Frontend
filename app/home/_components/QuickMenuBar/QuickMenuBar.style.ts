import { TypographyCss } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const QuickMenuContainer = styled.div`
  display: flex;
  gap: 28px;
  justify-content: center;
`;

export const MenuWrapper = styled.div`
  ${TypographyCss.H6Md};

  color: ${COLORS.GRAYSCALE_600};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

export const MenuIcon = styled.div`
  background-color: #ffffff;
  width: 56px;
  height: 56px;
  border-radius: 11.2px;
`;
