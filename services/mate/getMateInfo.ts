import { api } from "../axiosInterceptor";

export const getMateInfo = async () => {
  const { data } = await api(`${process.env.NEXT_PUBLIC_BASE_URL}/v1/mates/me`);

  return data;
};
