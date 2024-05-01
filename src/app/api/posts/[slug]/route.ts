import { deletePost, fetchPost } from "@/firebase/firebase";
import { NextRequest, NextResponse } from "next/server";

//parameter
//export async function GET(
//  request: NextRequest,
//  { params }: { params: { slug: string } }
//) {
//  const searchParam = request.nextUrl.searchParams;
//  const search = searchParam.get("search");
//  const response = {
//    id: params.slug,
//    message: "특정글 읽기",
//    data: { title: "merong", query: search },
//  };
//  return NextResponse.json(response, { status: 200 });
//}
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const searchParam = request.nextUrl.searchParams;
  const search = searchParam.get("search");

  const fetchBoard = await fetchPost(params.slug);
  if (fetchBoard === null) {
    return new Response(null, { status: 204 });
  }

  const response = {
    message: "성공",
    data: fetchBoard,
  };
  return NextResponse.json(response, { status: 200 });
}

//삭제
export async function DELETE(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  await deletePost(params.slug);

  const response = {
    message: "게시글 삭제 성공",
  };
  return NextResponse.json(response, { status: 200 });
}

//수정
export async function POST(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const data = await request.json();
  const editData = {
    id: params.slug,
    ...data,
  };
  const response = {
    message: "게시글 수정 성공",
    data: editData,
  };

  return NextResponse.json(response, { status: 200 });
}
