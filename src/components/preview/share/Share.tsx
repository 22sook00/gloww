import React, { useEffect, useState } from "react";

import dayjs from "dayjs";
import "dayjs/locale/ko";
dayjs.locale("ko");
import { weddingDataState } from "@/utils/atom";
import { useRecoilValue } from "recoil";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IconKakao } from "@/components/assets/Kakao";
import { Clipboard } from "@/components/assets/Clipboard";
import Dialog from "@/components/dialog/Dialog";

declare global {
  interface Window {
    Kakao: any;
  }
}

const Share = () => {
  const [isOpenCopyAlert, setIsOpenCopyAlert] = useState(false);

  const data = useRecoilValue(weddingDataState);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.min.js`;
    script.async = true;

    document.head.appendChild(script);
    script.onload = () => {
      //초기화가 되어있지 않다면 init()을 통해 초기화를 해준다.
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_APP_KEY);
      }
    };
  }, []);

  const handleShareKakao = () => {
    const weddingDate = data.date.date;
    //kakao 메세지에 보여줄 정보
    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: `💌 ${data.groom.name} & ${data.bride.name} 결혼합니다.`,
        description: `⏱️ ${
          (dayjs(weddingDate),
          dayjs(weddingDate).format("M월 D일 dddd h시 m분"))
        }`,
        imageUrl:
          "https://glow-wedding-card.s3.us-east-2.amazonaws.com/cdn/img_thumbnail.jpeg",

        link: {
          mobileWebUrl: window.location.origin,
          webUrl: window.location.origin,
        },
      },
      buttons: [
        {
          title: "청첩장 보러가기",
          link: {
            mobileWebUrl: window.location.origin || "https://gloww.vercel.app/",
            webUrl: window.location.origin || "https://gloww.vercel.app/",
          },
        },
      ],
    });
  };
  const handleCopyAlert = () => {
    setIsOpenCopyAlert(true);
    setTimeout(() => {
      setIsOpenCopyAlert(false);
    }, 1500);
  };

  return (
    <div className={"flex flex-col items-center text-sm py-10 gap-4"}>
      <button onClick={handleShareKakao} className="flex gap-2">
        <IconKakao width={"20px"} />
        카카오톡 공유하기
      </button>

      <CopyToClipboard text={window.location.origin} onCopy={handleCopyAlert}>
        <button className="flex items-center gap-2">
          <Clipboard width={"16px"} />
          링크 복사하기
        </button>
      </CopyToClipboard>

      {isOpenCopyAlert && (
        <Dialog handleClosePopup={() => setIsOpenCopyAlert(false)}>
          <div className="flex-col-default items-center">
            <p>복사가 완료되었습니다.</p>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default Share;
