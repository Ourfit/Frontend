import { getMateInfo } from "@/services/mate/getMateInfo";
import { useTokenStore } from "@/stores/tokenStore";
import { useQuery } from "@tanstack/react-query";

interface MyMateData {
  id: number;
  profileUrl: string;
  nickname: string;
  gender: string;
  age: number;
}

export const useMateInfo = () => {
  const token = useTokenStore.getState().token;

  return useQuery({
    queryKey: ["mateInfo"],
    queryFn: async () => {
      if (!token) {
        throw new Error("인증 토큰이 없습니다. 로그인하세요.");
      }
      try {
        const response = await getMateInfo();
        return response?.data || null;
      } catch (error: any) {
        if (error.response?.status === 401) {
          console.error("인증 실패: 토큰이 유효하지 않음");
        } else {
          console.error("메이트 정보 불러오기 실패:", error);
        }
        return null;
      }
    },
    staleTime: 6 * 10000 * 5,
    refetchInterval: (query) => {
      const data = query.state.data as MyMateData | null;

      if (data?.id) {
        return false;
      }
      return 30000;
    },

    refetchIntervalInBackground: true,
    enabled: !!token,
  });
};
