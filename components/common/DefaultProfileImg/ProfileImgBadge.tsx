import { useState } from "react";
import * as S from "./ProfileImgBadge.style";
import Image from "next/image";
import DefaultProfileImg from "./DefaultProfileImg";
import DumbbellsIcon from "@/assets/images/dumbbells.svg";

export default function ProfileImgBadge({
  imageUrl,
  size = 48,
  badgeSize,
  iconSize,
}: {
  imageUrl: string;
  size?: number;
  badgeSize?: number;
  iconSize?: number;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <S.ProfileBadge>
      <S.ProfileImageWrapper $size={size}>
        {imageUrl && !imgError ? (
          <Image
            src={imageUrl}
            alt="profile-image"
            width={size}
            height={size}
            onError={() => setImgError(true)}
            priority
          />
        ) : (
          <DefaultProfileImg />
        )}
      </S.ProfileImageWrapper>
      <S.IconWrapper $size={badgeSize} $iconSize={iconSize}>
        <DumbbellsIcon />
      </S.IconWrapper>
    </S.ProfileBadge>
  );
}
