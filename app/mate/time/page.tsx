"use client";

import { Typography } from "@/components/atoms/Typography";
import Button from "@/components/common/Button";
import Header from "@/components/common/Header/Header";
import SelectBar from "@/components/common/SelectBar/SelectBar";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { useState } from "react";
import * as S from "./style";

export default function SportTime() {
  const [startAmPm, setStartAmPm] = useState<string | number>("오전/오후");
  const [startHour, setStartHour] = useState<string | number>("00시");
  const [endAmPm, setEndAmPm] = useState<string | number>("오전/오후");
  const [endHour, setEndHour] = useState<string | number>("00시");
  const [month, setMonth] = useState<string | number>("1개월");
  const [age, setAge] = useState<string | number>("15세");

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
                selectType="time"
                setOption={setStartHour}
                optionValue={startHour}
                width="194px"
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
              />
            </S.DetailInfo>
          </S.DayOfTheWeekInfo>
        </S.Content>
        <S.ButtonWrapper>
          <Button
            disabled={true}
            size={BUTTON_SIZES.LARGE}
            variant={BUTTON_VARIANTS.PRIMARY}
          >
            변경 완료
          </Button>
        </S.ButtonWrapper>
      </S.TimeContainer>
    </>
  );
}
