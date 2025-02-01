import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const Container = styled.div<{
  $bgColorGray?: boolean;
}>`  background-color: ${({ $bgColorGray = false }) =>
    $bgColorGray ? "#F6F6F8" : "#ffffff"};`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: calc(100vh - 60px);
  padding: 80px 20px 10% 20px; // 반응형으로 수정

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const RegistrationPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: calc(100vh - 60px);
  padding: 0px 20px 28px 20px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MainContainer = styled.div`
  gap: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding-bottom: 10%;
`;

export const IconWrapper = styled.div`
  width: 152px;
  height: 152px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const GrayCheckIconWrapper = styled.div`
  width: 20px;
  height: 20px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  border-radius: 24px;
  background-color: ${COLORS.GRAYSCALE_100};
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;

export const FinishContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const Title = styled.div`
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
  background: linear-gradient(72deg, #003cff 3.07%, #cc35c9 55.43%);
  background: linear-gradient(
    72deg,
    color(display-p3 0.0863 0.2314 1) 3.07%,
    color(display-p3 0.7388 0.2584 0.7641) 55.43%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const NextTitle = styled.div`
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.2px;
  color: ${COLORS.GRAYSCALE_900};
`;

export const SubTitle = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.16px;
  text-align: center;
  color: ${COLORS.GRAYSCALE_700};
`;


export const Button = styled.button`
  display: flex;
  padding: 16px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 23px;
  margin-top: 10%;
  width: 100%;
  border: none;
  border-radius: 16px;
  background-color: ${COLORS.BLUE_500};

  color: ${COLORS.BASE_WHITE};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.14px;
`;
