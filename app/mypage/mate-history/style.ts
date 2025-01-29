import { TextButton } from "@/components/common/TextButton/TextButton.style";
import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  padding: 16px 20px;
  display: flex;
  gap: 8px;
`;

export const Button = styled(TextButton)<{ $isActive?: boolean }>`
  padding: 8px 14px;
  border-radius: 20px;
  cursor: pointer;
`;

export const MateHistoryList = styled.div`
  padding-top: 4px;
  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;
