"use client";
import { weddingDataState } from "@/utils/atom";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Footer from "@/components/footer/Footer";

import Greeting from "@/components/greeting/Greeting";

import Template1 from "@/components/template/Template1";
import Share from "@/components/preview/share/Share";
import Account from "@/components/preview/account/Account";
import Location from "@/components/preview/location/Location";
import Gallery from "@/components/preview/gallery/Gallery";
import Board from "@/components/preview/board/Board";
import Date from "@/components/preview/date/Date";

const MobileComplete = () => {
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
    <div className={`text-default-black flex-center relative font-myungjo`}>
      <div
        className={` w-full max-w-[406px] flex flex-col
        overflow-scroll lg:rounded-[24px] shadow-md `}
      >
        <div className="relative shadow-sm">
          <Template1 />
        </div>
        <Greeting />
        <Date />
        <Gallery />
        <Location />
        <Board />
        <Account />
        <Share />
        {/*<section>{wedding && <Map location={wedding?.location} />}</section>*/}
        <Footer />
      </div>
    </div>
  );
};

export default MobileComplete;
