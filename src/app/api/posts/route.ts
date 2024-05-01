//// app/router/api/posts/index.tsx
//import { NextApiRequest, NextApiResponse } from "next";
//import { doc, setDoc } from "firebase/firestore";
//import { db } from "@/firebase/firebase";
import dummyLists from "../../../../db.json";

//export default async function handler(
//  req: NextApiRequest,
//  res: NextApiResponse
//) {
//  if (req.method === "POST") {
//    const { id, writer, password, message } = req.body;
//    console.log("D:", req.body);

//    try {
//      await setDoc(doc(db, "posts", id), {
//        writer,
//        password,
//        message,
//      });

//      res.status(200).json({ message: "Post successfully created!", id });
//    } catch (error: any) {
//      res.status(500).json({ error: error.message });
//    }
//  } else {
//    res.setHeader("Allow", ["POST"]);
//    res.status(405).end(`Method ${req.method} Not Allowed`);
//  }
//}
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
