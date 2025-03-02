import XIcon from "@/assets/images/x.svg";
import { Typography } from "@/components/atoms/Typography";
import Button from "@/components/common/Button";
import { BUTTON_SIZES } from "@/constants/Button";
import { useWorkoutTypes } from "@/hooks/queries/useWorkoutTypes";
import { useCallback, useEffect, useState } from "react";
import * as S from "./style";

interface FilterPanelProps {
  onClose: () => void;
  onApply: (filters: {
    gender: string | null;
    time: string | null;
    sports: string[];
  }) => void;
}

export default function FilterPanel({ onClose, onApply }: FilterPanelProps) {
  const TIME_OPTIONS = [
    { label: "평일 낮", value: "WEEKDAY_AFTERNOON" },
    { label: "평일 저녁", value: "WEEKDAY_EVENING" },
    { label: "주말 낮", value: "WEEKEND_AFTERNOON" },
    { label: "주말 저녁", value: "WEEKEND_EVENING" },
  ];

  const GENDER_OPTIONS = [
    { label: "여성", value: "F" },
    { label: "남성", value: "M" },
  ];

  const { data: workoutTypes, isLoading, error } = useWorkoutTypes();

  const [startY, setStartY] = useState<number>(0);
  const [currentY, setCurrentY] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const [selectedGender, setSelectedGender] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedSports, setSelectedSports] = useState<string[]>([]);
  const [isApplyEnabled, setIsApplyEnabled] = useState(false);

  useEffect(() => {
    setIsApplyEnabled(
      !!selectedGender && !!selectedTime && selectedSports.length > 0,
    );
  }, [selectedGender, selectedTime, selectedSports]);

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

  const handleTimeClick = (time: string) => {
    setSelectedTime(time === selectedTime ? null : time);
  };

  const handleSportClick = (sport: string) => {
    setSelectedSports((prev) => {
      if (prev.includes(sport)) return prev.filter((s) => s !== sport);
      if (prev.length < 4) return [...prev, sport];
      return prev;
    });
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

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
            {GENDER_OPTIONS.map((opt) => (
              <S.GenderOption
                key={opt.value}
                $selected={selectedGender === opt.value}
                onClick={() =>
                  setSelectedGender((prev) =>
                    prev === opt.value ? null : opt.value,
                  )
                }
              >
                <Typography.H4Md>{opt.label}</Typography.H4Md>
              </S.GenderOption>
            ))}
          </S.GenderOptionBox>
        </S.GenderWrapper>
        <S.TimeInfoWrapper>
          <Typography.H4Sb>시간대</Typography.H4Sb>
          <S.TimeOptionBox>
            <S.TimeOptionBox>
              {TIME_OPTIONS.map((time) => (
                <S.TimeOption
                  key={time.value}
                  $selected={selectedTime === time.value}
                  onClick={() => handleTimeClick(time.value)}
                >
                  <Typography.H4Md>{time.label}</Typography.H4Md>
                </S.TimeOption>
              ))}
            </S.TimeOptionBox>
          </S.TimeOptionBox>
        </S.TimeInfoWrapper>
        <S.FilterWrapper>
          <Typography.H4Sb>운동 종류</Typography.H4Sb>
          <S.FilterFlex>
            {workoutTypes &&
              workoutTypes.map((workout) => (
                <S.FilterChip
                  key={workout.code}
                  $selected={selectedSports.includes(workout.code)}
                  onClick={() => handleSportClick(workout.code)}
                >
                  <Typography.H4Md>{workout.name}</Typography.H4Md>
                </S.FilterChip>
              ))}
          </S.FilterFlex>
        </S.FilterWrapper>
      </S.FilterPanelSection>

      <S.ApplyButtonWrapper>
        <Button
          size={BUTTON_SIZES.LARGE}
          variant="primary"
          disabled={!isApplyEnabled}
          onClick={() => {
            if (!isApplyEnabled) return;
            onApply({
              gender: selectedGender,
              time: selectedTime,
              sports: selectedSports,
            });
          }}
        >
          적용하기
        </Button>
      </S.ApplyButtonWrapper>
    </S.FilterPanelContainer>
  );
}
