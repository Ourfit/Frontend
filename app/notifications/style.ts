import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    color: ${COLORS.GRAYSCALE_900};
    padding: 8px 20px;
  }
`;

export const NotificationSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
