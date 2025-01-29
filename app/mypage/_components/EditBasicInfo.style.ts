import { TypographyCss } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const ListContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;

export const ListItem = styled.div`
  ${TypographyCss.H4Sb}

  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${COLORS.GRAYSCALE_100};
  color: ${COLORS.GRAYSCALE_900};
  cursor: pointer;

  & > svg {
    color: ${COLORS.GRAYSCALE_400};
  }
`;
