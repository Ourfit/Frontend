import styled from "styled-components";
import { COLORS } from "@/constants/Theme";

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SelectBox = styled.div`
  height: 52px;
  width: 100%;
  padding: 0 20px;
  border: 1px solid ${COLORS.GRAYSCALE_200};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${COLORS.GRAYSCALE_600};
  background-color: #fff;
  cursor: pointer;
`;

export const SelectOptions = styled.ul<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 11px);
  left: 0;
  width: 250px;
  box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  background-color: #fff;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  list-style: none;
  margin: 0;
  padding: 0;

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const OptionItem = styled.li`
  padding: 0 16px;
  height: 44px;
  line-height: 44px;
  color: ${COLORS.GRAYSCALE_600};
  cursor: pointer;
  border-bottom: 1px solid rgba(128, 128, 128, 0.55);

  &:last-child {
    border-bottom: none;
  }
`;
