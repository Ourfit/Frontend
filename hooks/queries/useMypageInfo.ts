import { getMypageInfo } from "@/services/mypage/getMypageInfo";
import { useQuery } from "@tanstack/react-query";

export interface MyPageData {
  id: number;
  nickname: string;
  age: number;
  profileUrl: string;
}

export function useMyPageInfo() {
  return useQuery({
    queryKey: ["myPageInfo"],
    queryFn: getMypageInfo,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
}
