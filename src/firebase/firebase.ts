// firebaseConfig.js
import { BoardFormProps } from "@/interface/boardForm";
import { timeStamp } from "console";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDoc,
  getDocs,
  doc,
  setDoc,
  Timestamp,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";

const {
  NEXT_PUBLIC_API_KEY,
  NEXT_PUBLIC_AUTH_DOMAIN,
  NEXT_PUBLIC_PROJECT_ID,
  NEXT_PUBLIC_STORAGE_BUCKET,
  NEXT_PUBLIC_MESSAGING_SENDER_ID,
  NEXT_PUBLIC_APP_ID,
  NEXT_PUBLIC_MEASUREMENT_ID,
} = process.env;

const firebaseConfig = {
  apiKey: NEXT_PUBLIC_API_KEY,
  authDomain: NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: NEXT_PUBLIC_PROJECT_ID,
  storageBucket: NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: NEXT_PUBLIC_MESSAGING_SENDER_ID,
  measurementId: NEXT_PUBLIC_MEASUREMENT_ID,
  appId: NEXT_PUBLIC_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//모든 축하게시글 가져오기
export async function fetchPosts() {
  const postRef = collection(db, "posts");
  const descQuery = query(postRef, orderBy("created_at", "desc"));
  const querySnapshot = await getDocs(descQuery);
  if (querySnapshot.empty) {
    return [];
  }
  const postList = [] as BoardFormProps[];

  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    const post = {
      id: doc.id,
      created_at: doc.data()["created_at"].toDate(),
      message: doc.data()["message"],
      password: doc.data()["password"],
      writer: doc.data()["writer"],
    };
    postList.push(post);
  });
  return postList;
}

//게시글 작성하기
export async function addPosts({ writer, message, password }: any) {
  const newPostRef = doc(collection(db, "posts")) as any;
  const createdAtTimeStamp = Timestamp.fromDate(new Date());
  const newPostData = {
    created_at: createdAtTimeStamp,
    id: newPostRef.id,
    message,
    password,
    writer,
  };

  // later...
  await setDoc(newPostRef, newPostData);
  return newPostData;
}

//특정 게시글 조회
export async function fetchPost(id: string) {
  if (id === null) return null;
  const postDocRef = doc(db, "posts", id) as any;
  const postDocSnap = (await getDoc(postDocRef)) as any;

  if (postDocSnap.exists()) {
    console.log("doc", postDocSnap.data());
    const post = {
      id: postDocSnap.id,
      created_at: postDocSnap.data()["created_at"].toDate(),
      message: postDocSnap.data()["message"],
      password: postDocSnap.data()["password"],
      writer: postDocSnap.data()["writer"],
    };
    return post;
  } else {
    return null;
  }
}
//특정 게시글 삭제
export async function deletePost(id: string) {
  await deleteDoc(doc(db, "posts", id));

  return null;
}

module.exports = { fetchPosts, fetchPost, addPosts, deletePost };
