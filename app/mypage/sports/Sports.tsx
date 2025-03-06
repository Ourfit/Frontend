import { Typography } from "@/components/atoms/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as S from "./style";

export default function Sports() {
  const pathname = usePathname();
  const isMypageSports = pathname === "/mypage/sports";

  return (
    <S.PreferenceSectionWrapper>
      <S.PreferenceHeader>
        <S.PreferenceTitle>
          선호 운동
          <Typography.H3Bd
            style={{ marginLeft: "4px", color: "#004DFF" }}
          ></Typography.H3Bd>
        </S.PreferenceTitle>
        <Link href="/mypage/sports">
          <S.PreferenceEdit>편집</S.PreferenceEdit>
        </Link>
      </S.PreferenceHeader>

      <S.PreferenceContent></S.PreferenceContent>
    </S.PreferenceSectionWrapper>
  );
}
