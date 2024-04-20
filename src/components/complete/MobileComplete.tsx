"use client";
import { weddingDataState } from "@/utils/atom";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Greeting from "../greeting/Greeting";
import Board from "../preview/board/Board";
import Date from "../preview/date/Date";
import Gallery from "../preview/gallery/Gallery";
import Location from "../preview/location/Location";
import Template1 from "../template/Template1";

const MobileComplete = () => {
  //const [wedding, setWedding] = useState();
  const [wedding, setWedding] = useRecoilState(weddingDataState);

  useEffect(() => {
    fetch("http://localhost:8888/wedding")
      .then((res) => {
        if (res.ok === false) {
          throw new Error("청첩장 정보를 불러오지 못했습니다.");
        }
        return res.json();
      })
      .then((data) => {
        setWedding(data);
      })
      .catch((err) => {
        console.dir(err, "에러발생");
      });
  }, []);

  return (
    <div className={`text-default-black  flex-center relative font-myungjo`}>
      <div
        className={` w-full max-w-[406px] flex flex-col
        overflow-scroll lg:rounded-[24px] shadow-md `}
      >
        <div className="relative ">
          <Template1 />
        </div>
        <Greeting />
        {/*<Date />*/}
        <Gallery />
        <Location />
        <Board />
        {/*<section>{wedding && <Map location={wedding?.location} />}</section>*/}
      </div>
    </div>
  );
};

export default MobileComplete;
