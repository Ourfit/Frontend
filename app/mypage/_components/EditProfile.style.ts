import { COLORS } from "@/constants/Theme";
import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  gap: 32px;
  padding-top: 32px;

  width: 100%;
  background-color: #ffffff;
  height: 100%;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ProfileSection = styled.section<{ $isEditingProfile: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: auto;
  max-height: 300px;
  padding: 0px 0px 32px 0px;
  box-sizing: border-box;
  background-color: #ffffff;
  border-bottom: ${(props) =>
    props.$isEditingProfile ? "0px solid #F9F9FA" : "10px solid #F9F9FA"};
`;

export const ProfileOverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 328px;
  padding: 0px 20px;
  box-sizing: border-box;
`;

export const ProfileImageWrapper = styled.div<{ $isEditingProfile: boolean }>`
  position: relative;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 1px solid gray;
  overflow: hidden;
  flex-shrink: 0;

  ${({ $isEditingProfile }) =>
    $isEditingProfile &&
    `
    &:hover .background-img {
      filter: blur(4px); 
      opacity: 0.5;
    }

    &:hover .overlay {
      opacity: 1; 
    }
  `}
`;

export const BackgroundImage = styled.img`
  width: 100%;
  max-width: 72px;
  height: 100%;
  max-height: 72px;

  transition: all 0.3s ease;
`;

export const OverlayImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  opacity: 0;
  transition: all 0.3s ease;
`;

export const ProfileName = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.18px;

  margin: 5px 0;
  color: #27282d;
`;

export const ProfileInfo = styled.p`
  font-size: 14px;
  color: #888888;
`;

export const PrimaryButton = styled.button`
  padding: 8px 10px;
  width: 68px;
  height: 34px;
  margin-top: 16px;

  font-size: 12px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.12px;

  box-sizing: border-box;
  color: ${COLORS.BLUE_500};
  background-color: ${COLORS.BLUE_50};

  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 450px;
  height: 102px;

  margin: 29px 0px;
`;

export const DescriptionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 24px;
`;

export const DescriptionTitle = styled.div`
  width: 59px;
  height: 24px;

  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.16px;
`;

export const DescriptionEdit = styled.div`
  width: 39px;
  height: 20px;

  font-size: 13px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.13px;

  color: ${COLORS.BLUE_500};
  cursor: pointer;
`;

export const DescriptionContent = styled.textarea`
  width: 100%;
  height: 72px;
  max-height: 72px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: horizontal;
  word-wrap: break-word;
  word-break: break-all;

  margin-top: 6px;
  padding: 16px 24px;
  box-sizing: border-box;

  border: 1px solid ${COLORS.GRAYSCALE_200};
  border-radius: 16px;

  font-size: 13px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.13px;

  font-family: inherit;
  font-style: normal;

  outline: none;
  resize: none;
  background: transparent;
`;

export const PreferenceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  width: 100%;
  max-width: 450px;
  height: auto;

  box-sizing: border-box;

  margin-top: 16px;
`;

export const Line = styled.div`
  width: 100%;
  max-width: 450px;

  height: 10px;
  background-color: ${COLORS.GRAYSCALE_50};
`;
