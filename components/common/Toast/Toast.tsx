import * as S from "./Toast.style";

import { ToastProps } from "@/types/toast";

import CircleCheckIcon from "@/assets/images/circle-check.svg";
import ErrorIcon from "@/assets/images/error.svg";
import { TOAST_STATUSES } from "@/constants/Toast";

export default function Toast({ message, status }: Readonly<ToastProps>) {
  return (
    <S.ToastContainer>
      {status === TOAST_STATUSES.SUCCESS ? <CircleCheckIcon /> : <ErrorIcon />}
      <S.Message>{message}</S.Message>
    </S.ToastContainer>
  );
}
