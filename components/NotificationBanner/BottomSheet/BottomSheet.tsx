import { Typography } from "@/components/atoms/Typography";
import XIcon from "@/assets/images/x.svg";
import * as S from "./BottomSheet.style";

export default function BottomSheet() {
  return (
    <S.BottomSheet>
      <div>
        <div></div>
        <div>
          <Typography.H2Sb>오늘 운동은 어떠셨어요?</Typography.H2Sb>
          <XIcon />
        </div>
      </div>
      <div></div>
      <div></div>
    </S.BottomSheet>
  );
}
