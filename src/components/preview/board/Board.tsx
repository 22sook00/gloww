import Button from "@/components/button/Button";
import Dialog from "@/components/dialog/Dialog";
import BoardForm from "@/components/preview/board/BoardForm";
import FormWrapper from "@/components/form/FormWrapper";

import React, { useEffect, useState } from "react";
import { BOARD_FORM_INIT } from "@/data/weddingFormInit";
import { BoardFormProps, INIT_BOARD_FORM } from "@/interface/boardForm";
import { formatBoardDate } from "@/utils/format";
import Fade from "@/components/effect/Fade";

const Board = () => {
  const [boardList, setBoardList] = useState<BoardFormProps[]>([
    INIT_BOARD_FORM,
  ]);
  const getAllBoardList = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`);
    return res.json();
  };

  useEffect(() => {
    const data = async () => {
      const { data } = await getAllBoardList();
      setBoardList(data);
    };
    data();
  }, []);

  const [isOpenBoardForm, setIsOpenBoardForm] = useState(false);
  const [isOpenAllBoard, setIsOpenAllBoard] = useState(false);

  return (
    <section className=" py-[50px]  px-[15px] bg-light-beige  shadow-sm">
      <Fade>
        <div className="flex-col-default items-center">
          <p className="sub-title">GUEST BOOK</p>
          <div className="flex flex-col justify-center items-center mb-4">
            <p className="leading-7">따뜻한 마음을</p>
            <p className="leading-7">축하의 글로 남겨주세요.</p>
          </div>
        </div>
      </Fade>
      {boardList?.length > 0 ? (
        <div className="w-full">
          <Fade>
            <div className="flex-col-default ">
              {boardList?.slice(0, 3).map((msg) => {
                return (
                  <article
                    key={msg.id}
                    className="rounded-md shadow p-4 font-pretendard text-sm w-full bg-white border border-tint-gray"
                  >
                    <div className="flex-between mb-2  ">
                      <p className=" font-bold">{msg.writer}</p>
                      <p className="text-dark-outline">
                        {" "}
                        {formatBoardDate(msg.created_at || "")}
                      </p>
                    </div>
                    <div>
                      <p className="text-light-black"></p>
                      {msg.message}
                    </div>
                  </article>
                );
              })}
            </div>
          </Fade>
        </div>
      ) : (
        <div>아직 작성된 방명록이 없습니다.</div>
      )}

      <div className="w-full font-pretendard flex justify-end gap-2 mt-3">
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
            {boardList?.map((msg) => {
              return (
                <article
                  key={msg.id}
                  className="rounded-md shadow p-4 font-pretendard text-sm w-full bg-white border border-tint-gray"
                >
                  <div className="flex-between mb-2  ">
                    <p className=" font-bold">{msg.writer}</p>
                    <p className="text-dark-outline">
                      {formatBoardDate(msg.created_at || "")}
                    </p>
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
            <BoardForm
              getAllBoardList={getAllBoardList}
              setIsOpenBoardForm={setIsOpenBoardForm}
              setBoardList={setBoardList}
            />
          </FormWrapper>
        </Dialog>
      )}
    </section>
  );
};

export default Board;
