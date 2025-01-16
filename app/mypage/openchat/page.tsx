"use client";

import Button from "@/components/common/Button/index";
import Input from "@/components/common/Input/Input";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import { INPUT_STATUS, InputStatus } from "@/constants/InputStatus";
import React, { useDeferredValue, useState } from "react";
import * as S from "./style";

export default function OpenChatPage() {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<InputStatus>(INPUT_STATUS.DEFAULT);
  const [isTyping, setIsTyping] = useState(false);

  const deferredValue = useDeferredValue(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    if (inputValue.trim() === "") {
      setStatus(INPUT_STATUS.DEFAULT);
      setIsTyping(false);
    } else {
      setIsTyping(true);
      setStatus(INPUT_STATUS.TYPING);
    }
  };

  const handleInputBlur = () => {
    if (value.trim() !== "") {
      setStatus(INPUT_STATUS.COMPLETE);
    } else {
      setStatus(INPUT_STATUS.DEFAULT);
    }
    setIsTyping(false);
  };

  const handleInputClear = () => {
    setValue("");
    setIsTyping(false);
    setStatus(INPUT_STATUS.DEFAULT);
  };

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleInputBlur();
    }
  };

  const handleSubmit = () => {
    console.log("등록 완료 버튼 클릭");
  };

  return (
    <S.Container>
      <S.Content>
        <S.Description>
          소통을 위해 <br />
          <S.HighlightText>오픈 채팅 링크</S.HighlightText>를 등록해주세요!
        </S.Description>
        <S.SubDescription>
          오픈 채팅방을 개설해 링크를 등록해주세요.
        </S.SubDescription>
        <S.InputWrapper>
          <div>임의</div>
          <Input
            value={value}
            deferredValue={deferredValue}
            placeholder="오픈 채팅방 링크 붙여놓기"
            status={status}
            isTyping={isTyping}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onClear={handleInputClear}
            onKeyPress={handleInputKeyPress}
          />
        </S.InputWrapper>
      </S.Content>
      <S.SubmitButtonWrapper>
        <Button
          size={BUTTON_SIZES.LARGE}
          variant={BUTTON_VARIANTS.PRIMARY}
          onClick={handleSubmit}
          disabled={deferredValue.trim() === ""}
        >
          등록 완료
        </Button>
      </S.SubmitButtonWrapper>
    </S.Container>
  );
}
