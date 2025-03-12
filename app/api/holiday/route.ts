import { NextResponse } from "next/server";
import { isHoliday } from "@kokr/date";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const date = searchParams.get("date");

  if (!date)
    return NextResponse.json({ error: "날짜가 필요합니다." }, { status: 400 });

  const holiday = await isHoliday(date);
  return NextResponse.json({ holiday });
}
