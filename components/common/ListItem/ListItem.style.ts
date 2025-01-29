import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const ItemContainer = styled.div<{
  $isRead?: boolean;
}>`
  background-color: #ffffff;
  border: 1px solid ${COLORS.GRAYSCALE_200};
  padding: 16px 20px;
  border-radius: 16px;
  display: flex;
  gap: 12px;
  align-items: center;
  cursor: pointer;
  opacity: ${({ $isRead = false }) => ($isRead ? 0.5 : 1)};

  & > svg {
    width: 20px;
    height: 20px;
    color: ${COLORS.GRAYSCALE_300};
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  flex-grow: 1;
`;

export const IconWrapper = styled.div`
  background-color: ${COLORS.GRAYSCALE_300};
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;

  & > svg {
    width: 15px;
    height: 15px;
  }
`;

export const ContentWrpper = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    color: ${COLORS.GRAYSCALE_600};

    > span {
      color: ${COLORS.BLUE_500};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  & > span:last-child {
    color: ${COLORS.GRAYSCALE_400};
  }
`;
