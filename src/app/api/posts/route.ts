import { fetchPosts, addPosts } from "@/firebase/firebase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const fetchBoardList = await fetchPosts();
  const response = {
    message: "게시글 리스트",
    data: fetchBoardList,
  };
  return NextResponse.json(response, { status: 200 });
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  const newPost = await addPosts(data);
  const response = {
    message: "게시글 작성 성공",
    data: { ...newPost },
  };
  return NextResponse.json(response, { status: 201 }); //새로 만든건 201로 많이함.
}
