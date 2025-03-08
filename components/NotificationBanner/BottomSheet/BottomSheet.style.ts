import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const BottomSheetContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  height: 100vh;
  width: 100%;
  z-index: 10000;
  transform: translateX(-50%);
  max-width: 450px;
`;

export const BottomSheet = styled.div<{ $show: boolean }>`
  background-color: ${COLORS.BASE_WHITE};
  width: 100%;
  position: absolute;
  bottom: 0;
  border-radius: 16px 16px 0 0;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.06);

  transform: translateY(${({ $show }) => ($show ? "0" : "5%")});
  opacity: ${({ $show }) => ($show ? "1" : "0")};
  transition:
    transform 0.2s ease-out,
    opacity 0.1s ease-out;
`;

export const BottomSheetTop = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HolderWrapper = styled.div`
  height: 28px;
  padding-top: 6px;
  display: flex;
  justify-content: center;
`;

export const Holder = styled.div`
  background-color: ${COLORS.GRAYSCALE_400};
  height: 4px;
  width: 58px;
  border-radius: 10px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 20px;
  height: 48px;

  & > span {
    flex-grow: 1;
  }
`;

export const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

export const SelectContainer = styled.div`
  padding: 16px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TextButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const ButtonWrapper = styled.div`
  padding: 12px 20px 28px;
`;
