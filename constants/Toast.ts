export const TOAST_MESSAGES = {
  SUCCESS: "수정이 완료 되었어요.",
  ERROR: "수정이 완료 되지 않았어요. 다시 시도해주세요.",
} as const;

export const TOAST_STATUSES = {
  SUCCESS: "success",
  ERROR: "error",
} as const;

export type ToastStatus = (typeof TOAST_STATUSES)[keyof typeof TOAST_STATUSES];
