"use client";

import { useUserInfoStore } from "@/stores/userInfoStore";
import { readFileAsDataURL } from "@/utils/readFileAsDataURL";
import { useEffect, useRef, useState } from "react";
import EditBasicInfo from "./_components/EditBasicInfo";
import EditProfile from "./_components/EditProfile";
import ViewProfile from "./_components/ViewProfile";

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
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingBasicInfo, setIsEditingBasicInfo] = useState(false);
  const [description, setDescription] = useState<string>("");
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [profileImage, setProfileImage] = useState<string>("/next.svg");

  const { userInfo, fetchUserInfo } = useUserInfoStore();

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

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setDescription(e.target.value);

  const handleDescriptionBlur = () => {
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
      } catch (error) {
        console.error("Error reading file:", error);
      }
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);

  if (isEditingProfile) {
    return (
      <EditProfile
        handleEditProfile={handleEditProfile}
        isEditingDescription={isEditingDescription}
        profileImage={profileImage}
        handleProfileImageClick={() => fileInputRef.current?.click()}
        handleEditDescription={handleEditDescription}
        fileInputRef={fileInputRef}
        handleFileChange={handleFileChange}
        description={description}
        handleDescriptionChange={handleDescriptionChange}
        handleDescriptionBlur={handleDescriptionBlur}
        descriptionInputRef={descriptionInputRef}
      />
    );
  }

  if (isEditingBasicInfo) {
    return <EditBasicInfo handleEditBasicInfo={handleEditBasicInfo} />;
  }

  return (
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
  );
}
