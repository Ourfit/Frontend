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
  height: 100%;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const EmptyContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  color: ${COLORS.GRAYSCALE_600};

  & > svg {
    width: 40px;
    height: 40px;
  }
`;
