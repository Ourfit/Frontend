import DumbbellsIcon from "@/assets/images/dumbbells.svg";
import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

const IconWrapper = styled.div<{ $size?: number }>`
  background-color: ${COLORS.GRAYSCALE_200};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    width: ${({ $size }) => ($size ? `${$size}px` : "24px")};
    height: ${({ $size }) => ($size ? `${$size}px` : "24px")};
    color: ${COLORS.BASE_WHITE};
  }
`;

export default function DefaultProfileImg({ size }: { size?: number }) {
  return (
    <IconWrapper $size={size}>
      <DumbbellsIcon />
    </IconWrapper>
  );
}
