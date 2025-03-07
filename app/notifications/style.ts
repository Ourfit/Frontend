import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  & > span {
    color: ${COLORS.GRAYSCALE_900};
    padding: 8px 20px;
  }
`;

export const NotificationSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  padding: 12px 20px 0;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
