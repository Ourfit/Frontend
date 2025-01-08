import CircleCheckIcon from "@/assets/images/circle-check.svg";
import CircleXIcon from "@/assets/images/circle-x.svg";
import ErrorIcon from "@/assets/images/error.svg";

export const INPUT_STATUS = {
  DEFAULT: "default",
  TYPING: "typing",
  COMPLETE: "complete",
  ERROR: "error",
} as const;

export type InputStatus = (typeof INPUT_STATUS)[keyof typeof INPUT_STATUS];

export const INPUT_STATUS_ICONS: Record<
  InputStatus,
  React.FC<React.SVGProps<SVGSVGElement>> | null
> = {
  default: null,
  typing: CircleXIcon,
  complete: CircleCheckIcon,
  error: ErrorIcon,
};
