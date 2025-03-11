"use client";

import ErrorIcon from "@/assets/images/not-found.svg";
import { Typography } from "@/components/atoms/Typography";
import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  & > svg {
    width: 36px;
    height: 36px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export default function Error() {
  return (
    <Container>
      <ErrorIcon />
      <Content>
        <Typography.H2Sb color={COLORS.GRAYSCALE_900}>
          오류가 발생했어요.
        </Typography.H2Sb>
        <Typography.H3Md color={COLORS.GRAYSCALE_600}>
          잠시 후 다시 시도해주세요.
        </Typography.H3Md>
      </Content>
    </Container>
  );
}
