import type { MateListResponse } from "@/services/mate/searchMate";
import { fetchMates } from "@/services/mate/searchMate";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";

export interface MateItem {
  id: number;
  nickname: string;
  age: number;
  gender: string;
  profileUrl: string;
  introduction: string;
}

export function useSearchMates({
  gender,
  preferredTimes,
  workoutTypes,
  size = 10,
}: {
  gender?: string;
  preferredTimes?: string[];
  workoutTypes?: string[];
  size?: number;
}) {
  return useInfiniteQuery<
    MateListResponse,
    Error,
    InfiniteData<MateListResponse>,
    (string | string[] | undefined)[],
    number //명시적 지정
  >({
    queryKey: ["mates", gender, preferredTimes, workoutTypes],
    queryFn: ({ pageParam = 0 }) =>
      fetchMates({
        pageParam,
        gender,
        preferredTimes,
        workoutTypes,
        size,
      }),
    initialPageParam: 0,
    staleTime: 60 * 1000,
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage.pageable?.pageNumber ?? 0;
      const totalPages = lastPage.totalPages ?? 1;

      // 서버 응답은 0-based인데, 다음 요청 page는 1-based라 +2를 해줘야하네(현재 pageNumber + 2)
      // ex) pageNumber=0 => 다음 요청 page=2, pageNumber=1 => 다음 요청 page=3, pageNumber=2
      // 결국엔 인덱스 매칭 문제때매 에러가 발생했었다.. 블로그에 적어야지
      const nextPage = currentPage + 1;

      return nextPage <= totalPages ? nextPage : undefined;
    },
  });
}
