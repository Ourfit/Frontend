"use client";
import ChevronLeft from "@/assets/images/chevron-left.svg";
import Evening from "@/assets/images/evening.svg";
import { Typography } from "@/components/atoms/Typography";
import Tooltip from "@/components/common/Tooltip/Tooltip";
import { useRouter } from "next/navigation";
import { useState } from "react";
import FilterPanel from "./FilterPanel/FilterPanel";
import * as S from "./style";

const dummyMates = [
  {
    id: 1,
    name: "주녕이",
    gender: "남",
    age: 26,
    description:
      "저랑 주말 저녁에 같이 헬스하실 분! 포기하지 말고 같이 도전해서 목표를 이뤄봅시다 👊🏻",
    profileImage: "/next.svg",
    tags: ["헬스", "주말 저녁"],
  },
  {
    id: 2,
    name: "운동 고수",
    gender: "여",
    age: 28,
    description: "필라테스를 함께 하실 분을 찾고 있어요! 💪",
    profileImage: "/next.svg",
    tags: ["필라테스", "평일 저녁"],
  },
  {
    id: 3,
    name: "테니스 마스터",
    gender: "남",
    age: 30,
    description: "테니스 한 판 같이 치실 분 구해요! 🎾",
    profileImage: "/next.svg",
    tags: ["테니스", "주말 낮"],
  },
  {
    id: 4,
    name: "수영 매니아",
    gender: "여",
    age: 25,
    description: "수영 좋아하는 분들 같이 연습해요! 🏊‍♀️",
    profileImage: "/next.svg",
    tags: ["수영", "평일 낮"],
  },
  {
    id: 5,
    name: "요가러",
    gender: "남",
    age: 27,
    description: "요가로 건강한 몸 만들어요! 🧘",
    profileImage: "/next.svg",
    tags: ["요가", "주말 저녁"],
  },
  {
    id: 6,
    name: "요가러",
    gender: "남",
    age: 27,
    description: "요가로 건강한 몸 만들어요! 🧘",
    profileImage: "/next.svg",
    tags: ["요가", "주말 저녁"],
  },
  {
    id: 7,
    name: "요가러",
    gender: "남",
    age: 27,
    description: "요가로 건강한 몸 만들어요! 🧘",
    profileImage: "/next.svg",
    tags: ["요가", "주말 저녁"],
  },
];

export default function ExploreMate() {
  const [showTooltip, setShowTooltip] = useState(true);
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const router = useRouter();

  const handleFilterClick = () => {
    setShowTooltip(false);
    setShowFilterPanel(!showFilterPanel);
  };
  return (
    <S.ExploreMateContainer>
      <S.FilterWrapper>
        <S.MateFilterTrigger onClick={handleFilterClick}>
          <Typography.H5Sb color="#8A92A3">필터</Typography.H5Sb>
          <ChevronLeft
            style={{ transform: "rotate(270deg)" }}
            width="16px"
            height="16px"
          />
        </S.MateFilterTrigger>
        {showTooltip ? (
          <Tooltip
            text="원하는 메이트 조건을 설정해보세요!"
            position="left"
          ></Tooltip>
        ) : null}
      </S.FilterWrapper>

      {showFilterPanel && (
        <FilterPanel onClose={() => setShowFilterPanel(false)} />
      )}

      <S.MateList>
        {dummyMates.map((mate) => (
          <S.MateListItem
            key={mate.id}
            onClick={() =>
              router.push(`/mate/mateprofile/${encodeURIComponent(mate.name)}`)
            }
          >
            <S.MateProfileImageWrapper>
              <S.ProfileImage src={mate.profileImage} alt={mate.name} />
            </S.MateProfileImageWrapper>
            <S.MateInfoWrapper>
              <S.ProfileInfo>
                <S.ProfileInfoTitle>
                  <Typography.H3Sb>{mate.name}</Typography.H3Sb>
                  <Typography.H6Md color="#6C727F">
                    {mate.gender}, {mate.age}세
                  </Typography.H6Md>
                </S.ProfileInfoTitle>

                <S.ProfileText>
                  <Typography.H6Md color="#8A92A3">
                    {mate.description}
                  </Typography.H6Md>
                </S.ProfileText>
              </S.ProfileInfo>
              <S.PreferenceTags>
                {mate.tags.map((tag, index) => (
                  <S.Tag key={index}>
                    {tag === "주말 저녁" && (
                      <Evening width="14px" height="14px" />
                    )}
                    <Typography.H6Md color="#6C727F">{tag}</Typography.H6Md>
                  </S.Tag>
                ))}
              </S.PreferenceTags>
            </S.MateInfoWrapper>
          </S.MateListItem>
        ))}
      </S.MateList>
    </S.ExploreMateContainer>
  );
}
