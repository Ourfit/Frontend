export const TOOLTIP_POSITIONS = {
  TOP: "top",
  BOTTOM: "bottom",
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  LEFT: "left",
  RIGHT: "right",
} as const;

export type TooltipPosition =
  (typeof TOOLTIP_POSITIONS)[keyof typeof TOOLTIP_POSITIONS];
