import XIcon from "@/assets/images/x.svg";
import { Typography } from "@/components/atoms/Typography";
import Button from "@/components/common/Button";
import { BUTTON_SIZES } from "@/constants/Button";
import { useCallback, useState } from "react";
import * as S from "./style";

export const sportsList = [
  "헬스",
  "필라테스",
  "수영",
  "댄스",
  "요가",
  "축구",
  "배드민턴",
  "크로스핏",
  "스키",
  "유도",
  "검도",
  "준영1",
  "준영2",
  "준영3",
  "준영4",
  "준영5",
  "준영6",
  "준영7",
  "준영8",
  "준영9",
  "준영10",
];

export default function FilterPanel({ onClose }: { onClose: () => void }) {
  const [startY, setStartY] = useState<number>(0);
  const [currentY, setCurrentY] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      setIsDragging(true);
      setStartY(e.touches[0].clientY);
    },
    [],
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (!isDragging) return;
      const diff = e.touches[0].clientY - startY;

      setCurrentY(diff > 0 ? diff : 0);
    },
    [isDragging, startY],
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);

    if (currentY > 600) {
      onClose();
    } else {
      setCurrentY(0);
    }
  }, [currentY, onClose]);

  return (
    <S.FilterPanelContainer
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        transform: `translate(-50%, calc(0px + ${currentY}px))`,
      }}
    >
      <S.FilterPanelHeader>
        <S.FilterPanelTitle>
          <Typography.H2Sb>탐색 필터</Typography.H2Sb>
          <S.CloseButton onClick={onClose}>
            <XIcon width="24px" height="24px" />
          </S.CloseButton>
        </S.FilterPanelTitle>
      </S.FilterPanelHeader>

      <S.FilterPanelSection>
        <S.GenderWrapper>
          <Typography.H4Sb>성별</Typography.H4Sb>
          <S.GenderOptionBox>
            <S.GenderOption>
              <Typography.H4Md color="#8A92A3">여성</Typography.H4Md>
            </S.GenderOption>
            <S.GenderOption>
              <Typography.H4Md color="#8A92A3">남성</Typography.H4Md>
            </S.GenderOption>
          </S.GenderOptionBox>
        </S.GenderWrapper>
        <S.TimeInfoWrapper>
          <Typography.H4Sb>시간대</Typography.H4Sb>
          <S.TimeOptionBox>
            <S.TimeOption>
              <Typography.H4Md color="#8A92A3">평일 낮</Typography.H4Md>
            </S.TimeOption>
            <S.TimeOption>
              <Typography.H4Md color="#8A92A3">평일 저녁</Typography.H4Md>
            </S.TimeOption>
            <S.TimeOption>
              <Typography.H4Md color="#8A92A3">평일 낮</Typography.H4Md>
            </S.TimeOption>
            <S.TimeOption>
              <Typography.H4Md color="#8A92A3">평일 저녁</Typography.H4Md>
            </S.TimeOption>
          </S.TimeOptionBox>
        </S.TimeInfoWrapper>
        <S.FilterWrapper>
          <Typography.H4Sb>운동 종류</Typography.H4Sb>
          <S.FilterFlex>
            {sportsList.map((sport) => (
              <S.FilterChip key={sport}>
                <Typography.H4Md color="#8A92A3">{sport}</Typography.H4Md>
              </S.FilterChip>
            ))}
          </S.FilterFlex>
        </S.FilterWrapper>
      </S.FilterPanelSection>

      <S.ApplyButtonWrapper>
        <Button size={BUTTON_SIZES.LARGE} variant="primary" disabled={true}>
          적용하기
        </Button>
      </S.ApplyButtonWrapper>
    </S.FilterPanelContainer>
  );
}
