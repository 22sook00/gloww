import { NextRequest, NextResponse } from "next/server";
import dummyLists from "../../../../db.json";
export async function GET(request: NextRequest) {
  const response = {
    message: "웨딩리스트",
    data: dummyLists,
  };
  return NextResponse.json(response, { status: 200 });
}
