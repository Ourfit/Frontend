import DumbbellsIcon from "@/assets/images/dumbbells.svg";
import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

const IconWrapper = styled.div`
  background-color: ${COLORS.GRAYSCALE_200};
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 24px;
    height: 24px;
    color: ${COLORS.BASE_WHITE};
  }
`;

export default function DefaultProfileImg() {
  return (
    <IconWrapper>
      <DumbbellsIcon />
    </IconWrapper>
  );
}
