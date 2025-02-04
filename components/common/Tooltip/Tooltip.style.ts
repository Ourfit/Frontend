import {
  TOOLTIP_POSITIONS,
  TooltipPosition,
} from "@/constants/TooltipPositions";
import styled, { css } from "styled-components";

export const TooltipContainer = styled.div<{
  position: TooltipPosition;
  $left?: number;
}>`
  position: absolute;
  top: 15%;
  left: ${({ $left }) => `${$left}px`};

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #004dff;
  color: #ffffff;
  padding: 8px 12px;
  box-sizing: border-box;
  border-radius: 10px;
  white-space: nowrap;

  width: auto;
  height: 34px;

  &::after {
    content: "";
    position: absolute;
    border-style: solid;

    ${({ position }) => {
      switch (position) {
        case TOOLTIP_POSITIONS.TOP:
          return css`
            top: -7px;
            left: 50%;
            transform: translateX(-50%);
            border-width: 0 8px 8px 8px;
            border-color: transparent transparent #004dff transparent;
          `;
        case TOOLTIP_POSITIONS.BOTTOM:
          return css`
            bottom: -7px;
            left: 50%;
            transform: translateX(-50%);
            border-width: 8px 8px 0 8px;
            border-color: #004dff transparent transparent transparent;
          `;
        case TOOLTIP_POSITIONS.TOP_LEFT:
          return css`
            top: -7px;
            left: 20%;
            border-width: 0 8px 8px 8px;
            border-color: transparent transparent #004dff transparent;
          `;
        case TOOLTIP_POSITIONS.TOP_RIGHT:
          return css`
            top: -7px;
            right: 20%;
            border-width: 0 8px 8px 8px;
            border-color: transparent transparent #004dff transparent;
          `;
        case TOOLTIP_POSITIONS.LEFT:
          return css`
            left: -7px;
            border-width: 8px 8px 8px 0;
            border-color: transparent #004dff transparent transparent;
          `;
        case TOOLTIP_POSITIONS.RIGHT:
          return css`
            right: -7px;
            border-width: 8px 0 8px 8px;
            border-color: transparent transparent transparent #004dff;
          `;
        default:
          return "";
      }
    }}
  }
`;
