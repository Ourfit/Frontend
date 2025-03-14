import { api } from "@/services/axiosInterceptor";

export default async function getHolidays(yearMonth: string) {
  try {
    const response = await api(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/holidays/${yearMonth}`,
    );

    return response.data.data;
  } catch (err) {
    throw err;
  }
}
