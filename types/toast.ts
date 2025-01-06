import { ToastStatus } from "@/constants/Toast";

export interface ToastProps {
  message: string;
  status: ToastStatus;
}
