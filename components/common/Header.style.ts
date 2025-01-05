"use client";

import styled from "styled-components";

export const HeaderContainer = styled.header<{
  paddingleft: string;
  paddingright: string;
}>`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  padding-right: ${(props) => props.paddingright};
  padding-left: ${(props) => props.paddingleft};
  position: absolute;
  justify-content: space-between;
  top: 0;
`;

export const LocationContainer = styled.div`
  display: flex;
  gap: 2px;
`;
