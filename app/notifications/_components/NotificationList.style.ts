import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 12px;
  color: ${COLORS.GRAYSCALE_900};
`;
