"use client";

import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding-top: 24px;
  padding-bottom: 64px;
`;

export default function MainContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainContainer>{children}</MainContainer>;
}
