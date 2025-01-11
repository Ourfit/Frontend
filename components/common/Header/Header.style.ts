"use client";

import styled from "styled-components";

export const HeaderContainer = styled.header<{
  $paddingLeft: string;
  $paddingRight: string;
}>`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  padding-right: ${(props) => props.$paddingRight};
  padding-left: ${(props) => props.$paddingLeft};
  position: absolute;
  justify-content: space-between;
  top: 0;
  z-index: 99;
  background-color: white;
`;

export const LocationContainer = styled.div`
  display: flex;
  gap: 2px;
`;
