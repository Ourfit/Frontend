"use client";

import { readFileAsDataURL } from "@/utils/readFileAsDataURL";
import { useEffect, useRef, useState } from "react";
import EditProfile from "./_components/EditProfile";
import ViewProfile from "./_components/ViewProfile";

const managementLinks = [
  { href: "/mypage/openchat", label: "오픈 채팅 관리" },
  { href: "/mypage/mate-history", label: "메이트 내역" },
  { href: "/mypage/contact", label: "문의하기" },
  { href: "/mypage/suggestions", label: "건의하기" },
  { href: "/mypage/account-info", label: "계정 정보" },
  { href: "", label: "앱 버전" },
];

export default function Mypage() {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [description, setDescription] = useState<string>("");
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [profileImage, setProfileImage] = useState<string>("/next.svg");

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement | null>(null);

  const handleEditProfile = () => setIsEditingProfile(true);

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
    if (typeof window !== "undefined") {
      localStorage.setItem("description", description);
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const imageUrl = await readFileAsDataURL(file);
        setProfileImage(imageUrl);
        if (typeof window !== "undefined") {
          localStorage.setItem("profileImage", imageUrl);
        }
      } catch (error) {
        console.error("Error reading file:", error);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedImage = localStorage.getItem("profileImage");
      const savedDescription = localStorage.getItem("description");
      if (savedImage) setProfileImage(savedImage);
      if (savedDescription) setDescription(savedDescription);
    }
  }, []);

  return isEditingProfile ? (
    <EditProfile
      isEditingProfile={isEditingProfile}
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
  ) : (
    <ViewProfile
      isEditingProfile={isEditingProfile}
      profileImage={profileImage}
      handleEditProfile={handleEditProfile}
      managementLinks={managementLinks}
    />
  );
}
