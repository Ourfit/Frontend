import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import { StepProps } from "@/types/step";
import * as S from "./Nickname.style";
import Button from "@/components/common/Button";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants/Button";
import React, { useDeferredValue, useEffect, useState } from "react";
import { STEPS_LABEL } from "@/constants/Signup";
import Toast from "@/components/common/Toast/Toast";
import { TOAST_MESSAGES, TOAST_STATUSES, ToastStatus } from "@/constants/Toast";
import { INPUT_STATUS, InputStatus } from "@/constants/InputStatus";
import Input from "@/components/common/Input/Input";
import { useMutation, useQuery } from "@tanstack/react-query";
import { nicknameDuplication } from "@/services/signup/nicknameDuplication";
import { useDebounce } from "@/hooks/useDebounce";
import updateBasicInfo from "@/app/mypage/_lib/updateBasicInfo";
import { queryClient } from "@/components/common/ReactQueryProvider";
import { AxiosError } from "axios";

const Nickname = ({ nextStep, value }: StepProps) => {
  const [nickname, setNickname] = useState(
    typeof value === "string" ? value : "",
  );
  const deferredValue = useDeferredValue(nickname === value ? "" : nickname);
  const debouncedNickname = useDebounce(
    nickname === value ? "" : nickname,
    500,
  );

  const [toast, setToast] = useState<{
    status: ToastStatus;
    message: string;
  } | null>(null);
  const [status, setStatus] = useState<InputStatus>("default");
  const [isTyping, setIsTyping] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["nickname", debouncedNickname],
    queryFn: () => nicknameDuplication(debouncedNickname),
    staleTime: 1000 * 60 * 5,
    enabled: !!debouncedNickname,
  });

  const mutation = useMutation({
    mutationFn: () =>
      updateBasicInfo({
        nickname: debouncedNickname,
      }),
    onSuccess: (status) => {
      if (status === 200) {
        showToast(TOAST_STATUSES.SUCCESS, TOAST_MESSAGES.SUCCESS);
        queryClient.invalidateQueries({ queryKey: ["userMe"] });
      }
    },
    onError: (err) => {
      const error = err as AxiosError;
      const statusCode = error.response?.status;
      const message =
        statusCode === 409
          ? "닉네임 변경 후 30일이 지나지 않았습니다."
          : TOAST_MESSAGES.ERROR;
      showToast(TOAST_STATUSES.ERROR, message);
    },
  });

  useEffect(() => {
    if (nickname.trim() !== "" && data && nickname !== value) {
      setStatus(data.available ? INPUT_STATUS.COMPLETE : INPUT_STATUS.ERROR);
    }
  }, [data]);

  const showToast = (status: ToastStatus, message: string) => {
    setToast({ status, message });
    setTimeout(() => setToast(null), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setNickname(newValue);
    setIsTyping(!!newValue.trim());
    setStatus(newValue.trim() ? INPUT_STATUS.TYPING : INPUT_STATUS.DEFAULT);
  };

  const handleInputBlur = () => {
    if (nickname.trim() !== "" && data && nickname !== value) {
      setStatus(data.available ? INPUT_STATUS.COMPLETE : INPUT_STATUS.ERROR);
    } else {
      setStatus(INPUT_STATUS.DEFAULT);
    }
    setIsTyping(false);
  };

  const handleClear = () => {
    setNickname("");
    setStatus(INPUT_STATUS.DEFAULT);
  };

  const buttonClickHandler = () => {
    if (nickname.trim()) {
      if (nextStep) nextStep(STEPS_LABEL.NICKNAME, nickname);
      else mutation.mutate();
    }
  };

  return (
    <S.NicknameContainer>
      <S.NicknameWrapper>
        <S.SignupIntroContainer>
          <S.SignupIntroTitleWrapper>
            <Typography.H1Sb>반가워요!</Typography.H1Sb>
            <Typography.H1Sb>
              <span style={{ color: COLORS.BLUE_500 }}>닉네임</span>을
              설정해주세요
            </Typography.H1Sb>
          </S.SignupIntroTitleWrapper>
          <Typography.H4Md color={COLORS.GRAYSCALE_600}>
            닉네임은 30일마다 변경할 수 있어요.
          </Typography.H4Md>
        </S.SignupIntroContainer>
        <S.InputContainer>
          <Input
            value={nickname}
            deferredValue={deferredValue}
            placeholder={"한글만 입력 가능, 최대 12자"}
            status={status}
            isTyping={isTyping}
            isLoading={isLoading}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onClear={handleClear}
            inputStyle={{
              backgroundColor: COLORS.BASE_WHITE,
              color: COLORS.GRAYSCALE_900,
            }}
            borderColor
          />
          {nickname !== "" && data && !data.available && (
            <S.Message>{data.message}</S.Message>
          )}
        </S.InputContainer>
      </S.NicknameWrapper>
      <S.ButtonContainer>
        <Button
          disabled={status !== INPUT_STATUS.COMPLETE || nickname === value}
          size={BUTTON_SIZES.LARGE}
          variant={BUTTON_VARIANTS.PRIMARY}
          onClick={buttonClickHandler}
        >
          {nextStep ? "다음" : "변경완료"}
        </Button>
      </S.ButtonContainer>
      {toast && <Toast message={toast.message} status={toast.status} />}
    </S.NicknameContainer>
  );
};

export default Nickname;
