import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${COLORS.GRAYSCALE_900};
`;

export const ListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
