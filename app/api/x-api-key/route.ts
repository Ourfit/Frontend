import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    apiKey: process.env.X_OURFIT_API_KEY,
  });
}
