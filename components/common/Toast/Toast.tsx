import * as S from "./Toast.style";

interface ToastProps {
  message: string;
  status: "success" | "error";
}

import CircelCheckIcon from "@/assets/images/circle-check.svg";
import ErrorIcon from "@/assets/images/error.svg";

export default function Toast({ message, status }: ToastProps) {
  return (
    <S.ToastContainer status={status}>
      {status === "success" ? <CircelCheckIcon /> : <ErrorIcon />}
      <S.Message>{message}</S.Message>
    </S.ToastContainer>
  );
}
