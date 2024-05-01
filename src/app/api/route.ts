import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const response = {
    message: "hihi",
    data: "kkkk",
  };
  return NextResponse.json(response, { status: 200 });
}
