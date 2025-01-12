import styled from "styled-components";

export const FrameContainer = styled.div`
  width: 100%;
  max-width: 390px;
  height: 100%;
  min-height: 100svh;
  box-sizing: border-box;
  position: relative;
  background-color: #f6f6f6;
`;

export const Content = styled.div`
  box-sizing: border-box;
  background-color: #f6f6f6;
  display: flex;
  flex-direction: column;
  min-height: calc(100svh - 69px);
`;
