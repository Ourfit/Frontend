import { useState } from "react";
import * as S from "./ProfileImgBadge.style";
import Image from "next/image";
import DefaultProfileImg from "./DefaultProfileImg";
import DumbbellsIcon from "@/assets/images/dumbbells.svg";

export default function ProfileImgBadge({ imageUrl }: { imageUrl: string }) {
  const [imgError, setImgError] = useState(false);

  return (
    <S.ProfileBadge>
      <S.ProfileImageWrapper>
        {imageUrl && !imgError ? (
          <Image
            src={imageUrl}
            alt="profile-image"
            width={48}
            height={48}
            onError={() => setImgError(true)}
            priority
          />
        ) : (
          <DefaultProfileImg />
        )}
      </S.ProfileImageWrapper>
      <S.IconWrapper>
        <DumbbellsIcon />
      </S.IconWrapper>
    </S.ProfileBadge>
  );
}
