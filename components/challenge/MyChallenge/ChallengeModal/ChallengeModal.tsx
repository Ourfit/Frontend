import { Typography } from "@/components/atoms/Typography";
import * as S from "./ChallengeModal.style";
import { COLORS } from "@/constants/Theme";
import { useEffect, useRef } from "react";

export default function ChallengeModal({
  setIsModalOpen,
}: {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const modalRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <S.MenuContainer ref={modalRef}>
      <S.MenuItem color={COLORS.BASE_BLACK}>
        <Typography.H4Md>챌린지 수정하기</Typography.H4Md>
      </S.MenuItem>
      <S.MenuItem color={COLORS.POINT_ERROR}>
        <Typography.H4Md>챌린지 삭제하기</Typography.H4Md>
      </S.MenuItem>
    </S.MenuContainer>
  );
}
