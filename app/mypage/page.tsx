"use client";

import Toast from "@/components/common/Toast/Toast";
import { TOAST_STATUSES } from "@/constants/Toast";
import { useMyPageInfo } from "@/hooks/queries/useMypageInfo";
import { setImageUrl } from "@/services/mypage/setImageUrl";
import { ToastProps } from "@/types/toast";
import { readFileAsDataURL } from "@/utils/readFileAsDataURL";
import { AxiosError } from "axios";
import { useEffect, useRef, useState } from "react";
import EditBasicInfo from "./_components/EditBasicInfo";
import EditProfile from "./_components/EditProfile";
import ViewProfile from "./_components/ViewProfile";
import { useEditProfileStore } from "@/stores/editProfileStore";

const managementLinks = [
  { href: "/mypage/openchat", label: "오픈 채팅 관리" },
  { href: "/mypage/mate-history", label: "메이트 내역" },
  {
    href: "https://forms.gle/aYyfMEQr3xBU5ZqV6",
    label: "문의하기",
    target: "_blank",
  },
  {
    href: "https://forms.gle/Vqxz1beYrSXBoEKX7",
    label: "건의하기",
    target: "_blank",
  },
  { href: "/mypage/account-info", label: "계정 정보" },
  { href: "", label: "앱 버전" },
];

export default function Mypage() {
  const [toast, setToast] = useState<ToastProps | null>(null);
  const { data: userInfo, refetch } = useMyPageInfo();
  const { isEdit, resetEdit } = useEditProfileStore();

  const [isEditingProfile, setIsEditingProfile] = useState(isEdit);
  const [isEditingBasicInfo, setIsEditingBasicInfo] = useState(false);

  const [introduction, setIntroduction] = useState("");

  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [profileImage, setProfileImage] = useState<string | undefined>(
    userInfo?.profileUrl,
  );

  console.log(userInfo);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement | null>(null);

  const handleEditProfile = () => setIsEditingProfile((prev) => !prev);
  const handleEditBasicInfo = () => setIsEditingBasicInfo((prev) => !prev);

  const handleEditDescription = () => {
    setIsEditingDescription(true);
    setTimeout(() => {
      descriptionInputRef.current?.focus();
    }, 100);
  };

  const handleIntroductionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => setIntroduction(e.target.value);

  const handleIntroductionBlur = () => {
    setIsEditingDescription(false);
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const imageUrl = await readFileAsDataURL(file);
        setProfileImage(imageUrl);

        await setImageUrl(file);

        await refetch();
      } catch (error: unknown) {
        if (error instanceof AxiosError && error.response?.status === 429) {
          setToast({
            message: "1분 뒤에 프로필 변경이 가능해요! ",
            status: TOAST_STATUSES.ERROR,
          });
          setTimeout(() => {
            setToast(null);
          }, 3000);
        }
      }
    }
  };

  useEffect(() => {
    if (userInfo?.introduction !== undefined) {
      setIntroduction(userInfo.introduction);
    }
  }, [userInfo?.introduction]);

  useEffect(() => {
    return () => resetEdit();
  }, []);

  return (
    <>
      {isEditingProfile ? (
        <EditProfile
          handleEditProfile={handleEditProfile}
          isEditingDescription={isEditingDescription}
          profileImage={userInfo?.profileUrl}
          nickname={userInfo?.nickname}
          gender={userInfo?.gender}
          age={userInfo?.age}
          skillLevel={userInfo?.skillLevel}
          handleProfileImageClick={() => fileInputRef.current?.click()}
          handleEditDescription={handleEditDescription}
          fileInputRef={fileInputRef}
          handleFileChange={handleFileChange}
          introduction={introduction}
          handleIntroductionChange={handleIntroductionChange}
          handleIntroductionBlur={handleIntroductionBlur}
          descriptionInputRef={descriptionInputRef}
        />
      ) : isEditingBasicInfo ? (
        <EditBasicInfo handleEditBasicInfo={handleEditBasicInfo} />
      ) : (
        <ViewProfile
          profileImage={userInfo?.profileUrl}
          nickname={userInfo?.nickname}
          gender={userInfo?.gender}
          sns={userInfo?.oAuthProvider}
          age={userInfo?.age}
          email={userInfo?.email}
          skillLevel={userInfo?.skillLevel}
          handleEditProfile={handleEditProfile}
          handleEditBasicInfo={handleEditBasicInfo}
          managementLinks={managementLinks}
        />
      )}
      {toast && <Toast message={toast.message} status={toast.status} />}
    </>
  );
}
