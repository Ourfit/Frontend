import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  color: ${COLORS.GRAYSCALE_500};
  height: 100%;
  margin-top: -37px;
`;
