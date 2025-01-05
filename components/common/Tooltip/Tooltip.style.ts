import styled, { css } from "styled-components";

export const TooltipContainer = styled.div<{
  position: "top" | "bottom" | "top-left" | "top-right" | "left" | "right";
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #004dff;
  color: #ffffff;
  padding: 8px 16px;
  box-sizing: border-box;
  border-radius: 8px;
  white-space: nowrap;

  width: 108px;
  height: 34px;

  &::after {
    content: "";
    position: absolute;
    border-style: solid;

    ${({ position }) => {
      switch (position) {
        case "top":
          return css`
            top: -7px;
            left: 50%;
            transform: translateX(-50%);
            border-width: 0 8px 8px 8px;
            border-color: transparent transparent #004dff transparent;
          `;
        case "bottom":
          return css`
            bottom: -7px;
            left: 50%;
            transform: translateX(-50%);
            border-width: 8px 8px 0 8px;
            border-color: #004dff transparent transparent transparent;
          `;
        case "top-left":
          return css`
            top: -7px;
            left: 20%;
            border-width: 0 8px 8px 8px;
            border-color: transparent transparent #004dff transparent;
          `;
        case "top-right":
          return css`
            top: -7px;
            right: 20%;
            border-width: 0 8px 8px 8px;
            border-color: transparent transparent #004dff transparent;
          `;
        case "left":
          return css`
            left: -7px;
            border-width: 8px 8px 8px 0;
            border-color: transparent #004dff transparent transparent;
          `;
        case "right":
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
