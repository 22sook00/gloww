import Button from "@/components/button/Button";
import Dialog from "@/components/dialog/Dialog";
import BoardForm from "@/components/preview/board/BoardForm";
import FormWrapper from "@/components/form/FormWrapper";

import React, { useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { BOARD_FORM_INIT } from "@/data/weddingFormInit";

const TEMP_BOARD = [
  {
    id: 1,
    writer: "쑥빵",
    createdAt: "2024-04-27 01:36:50",
    message: "영숙아 결혼 축하해 행복하게 잘 살아ㅎㅎ 두분다 넘 잘어울려요ㅎㅎ",
  },
  {
    id: 2,
    writer: "이혜영",
    createdAt: "2024-04-28 11:30:15",
    message:
      "용팔아 너무 축하해. 내가 기분이 너무 좋다. 너무 축하하고 행복하길 기도할께. ",
  },
  {
    id: 3,
    writer: "벨라리우스",
    createdAt: "2024-04-29 21:14:23",
    message: "내 최애 커플🫶🏽 천년만년 사랑해애애액❤️‍🔥🥰👩‍❤️‍👨💍",
  },
  {
    id: 4,
    writer: "허수지",
    createdAt: "2024-04-30 13:26:54",
    message: "너무 예쁜 신랑 신부🫶🏻결혼 축하드려요~!😍😍",
  },
  {
    id: 5,
    writer: "곽두팔",
    createdAt: "2024-05-01 03:32:55",
    message: "영이 사진너무이쁘다~ 잘살아~~",
  },
  {
    id: 6,
    writer: "으네",
    createdAt: "2024-05-02 05:06:18",
    message: "너무 선남선녀다!🩵 이쁜커플 잘살앙",
  },
];
const Board = () => {
  const [isOpenBoardForm, setIsOpenBoardForm] = useState(false);
  const [isOpenAllBoard, setIsOpenAllBoard] = useState(false);

  return (
    <section className=" py-[50px]  px-[15px] bg-light-beige flex-col-default items-center shadow-md">
      <p className="sub-title">GUEST BOOK</p>
      <div className="flex flex-col justify-center items-center mb-4">
        <p className="leading-7">따뜻한 마음을</p>
        <p className="leading-7">축하의 글로 남겨주세요.</p>
      </div>

      {TEMP_BOARD?.length > 0 ? (
        <div className="flex-col-default w-full ">
          {TEMP_BOARD?.slice(0, 3).map((msg) => {
            return (
              <article
                key={msg.id}
                className="rounded-md shadow p-4 font-pretendard text-sm w-full bg-white border border-tint-gray"
              >
                <div className="flex-between mb-2  ">
                  <p className=" font-bold">{msg.writer}</p>
                  <p className="text-dark-outline">{msg.createdAt}</p>
                </div>
                <div>
                  <p className="text-light-black"></p>
                  {msg.message}
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div>아직 작성된 방명록이 없습니다.</div>
      )}

      <div className="w-full font-pretendard flex justify-end gap-2">
        <Button
          onClick={() => setIsOpenAllBoard(true)}
          customStyle={"bg-default-beige"}
          size="xs"
        >
          전체보기
        </Button>
        <Button
          onClick={() => setIsOpenBoardForm(true)}
          customStyle={"bg-default-beige"}
          size="xs"
        >
          작성하기
        </Button>
      </div>

      {isOpenAllBoard && (
        <Dialog
          title={"방명록 전체보기"}
          handleClosePopup={() => setIsOpenAllBoard(false)}
        >
          <div className="flex-col-default w-full ">
            {TEMP_BOARD?.map((msg) => {
              return (
                <article
                  key={msg.id}
                  className="rounded-md shadow p-4 font-pretendard text-sm w-full bg-white border border-tint-gray"
                >
                  <div className="flex-between mb-2  ">
                    <p className=" font-bold">{msg.writer}</p>
                    <p className="text-dark-outline">{msg.createdAt}</p>
                  </div>
                  <div>
                    <p className="text-light-black"></p>
                    {msg.message}
                  </div>
                </article>
              );
            })}
          </div>
        </Dialog>
      )}

      {isOpenBoardForm && (
        <Dialog
          title={"방명록 작성하기"}
          handleClosePopup={() => setIsOpenBoardForm(false)}
        >
          <FormWrapper initParams={BOARD_FORM_INIT}>
            <BoardForm setIsOpenBoardForm={setIsOpenBoardForm} />
          </FormWrapper>
        </Dialog>
      )}
    </section>
  );
};

export default Board;
