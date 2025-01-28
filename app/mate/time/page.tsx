"use client";

import { Typography } from "@/components/atoms/Typography";
import Button from "@/components/common/Button";
import Header from "@/components/common/Header/Header";
import SelectBar from "@/components/common/SelectBar/SelectBar";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { COLORS } from "@/constants/Theme";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as S from "./style";

export default function SportTime() {
  const [startAmPm, setStartAmPm] = useState<string>("오전/오후");
  const [startHour, setStartHour] = useState<string>("00시");
  const [endAmPm, setEndAmPm] = useState<string>("오전/오후");
  const [endHour, setEndHour] = useState<string>("00시");

  const router = useRouter();

  const DayOfTheWeeks = ["월", "화", "수", "목", "금", "토", "일"];

  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const handleDayClick = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day],
    );
  };

  const isButtonEnabled =
    selectedDays.length > 0 &&
    startAmPm !== "오전/오후" &&
    startHour !== "00시" &&
    endAmPm !== "오전/오후" &&
    endHour !== "00시";

  const handleSaveTimeInfo = () => {
    if (!isButtonEnabled) return;
    const timeInfo = {
      days: selectedDays,
      startTime: `${startAmPm} ${startHour}`,
      endTime: `${endAmPm} ${endHour}`,
    };

    localStorage.setItem("sportTimeInfo", JSON.stringify(timeInfo));
    router.push("/mate");
  };

  return (
    <>
      <Header />

      <S.TimeContainer>
        <S.Content>
          <S.TimeInfo>
            <Typography.H2Sb>
              함께 운동하는 <S.HighlightedText>요일</S.HighlightedText>이
              언제인가요?
            </Typography.H2Sb>
            <S.DetailWeekInfo>
              <S.Row>
                {DayOfTheWeeks.slice(0, 3).map((v, index) => (
                  <S.DayOfWeeksBox
                    key={index}
                    $isSelected={selectedDays.includes(v)}
                    onClick={() => handleDayClick(v)}
                  >
                    <Typography.H4Md
                      color={
                        selectedDays.includes(v)
                          ? COLORS.BLUE_500
                          : COLORS.GRAYSCALE_600
                      }
                    >
                      {v}
                    </Typography.H4Md>
                  </S.DayOfWeeksBox>
                ))}
              </S.Row>
              <S.Row>
                {DayOfTheWeeks.slice(3).map((v, index) => (
                  <S.DayOfWeeksBox
                    key={index}
                    $isSelected={selectedDays.includes(v)}
                    onClick={() => handleDayClick(v)}
                  >
                    <Typography.H4Md
                      color={
                        selectedDays.includes(v)
                          ? COLORS.BLUE_500
                          : COLORS.GRAYSCALE_600
                      }
                    >
                      {v}
                    </Typography.H4Md>
                  </S.DayOfWeeksBox>
                ))}
              </S.Row>
            </S.DetailWeekInfo>
          </S.TimeInfo>
          <S.DayOfTheWeekInfo>
            <Typography.H2Sb>
              함께 운동하는 <S.HighlightedText>시간</S.HighlightedText>이
              언제인가요?
            </Typography.H2Sb>
            <S.DetailInfo>
              <SelectBar
                selectType="ampm"
                setOption={setStartAmPm}
                optionValue={startAmPm}
                width="140px"
              />
              <SelectBar
                selectType="hour"
                setOption={setStartHour}
                optionValue={startHour}
                width="194px"
                hasSuffix={true}
                suffixText="부터"
              />
            </S.DetailInfo>
            <S.DetailInfo>
              <SelectBar
                selectType="ampm"
                setOption={setEndAmPm}
                optionValue={endAmPm}
                width="140px"
              />

              <SelectBar
                selectType="hour"
                setOption={setEndHour}
                optionValue={endHour}
                width="194px"
                hasSuffix={true}
                suffixText="까지"
              />
            </S.DetailInfo>
          </S.DayOfTheWeekInfo>
        </S.Content>
        <S.ButtonWrapper>
          <S.ButtonArea>
            <Button
              disabled={!isButtonEnabled}
              size={BUTTON_SIZES.LARGE}
              variant={BUTTON_VARIANTS.PRIMARY}
              onClick={() => {
                if (isButtonEnabled) handleSaveTimeInfo();
              }}
            >
              변경 완료
            </Button>
          </S.ButtonArea>
        </S.ButtonWrapper>
      </S.TimeContainer>
    </>
  );
}
