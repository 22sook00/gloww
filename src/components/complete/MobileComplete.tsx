"use client";
import React from "react";
import dynamic from "next/dynamic";

import Footer from "@/components/footer/Footer";

import Greeting from "@/components/greeting/Greeting";

import Template1 from "@/components/template/Template1";
import Account from "@/components/preview/account/Account";
import Location from "@/components/preview/location/Location";
import Gallery from "@/components/preview/gallery/Gallery";
import Board from "@/components/preview/board/Board";
import Sound from "@/src/components/sound/Sound";
import Outro from "@/src/components/preview/outro/Outro";

const Share = dynamic(() => import("@/components/preview/share/Share"), {
  ssr: false,
});

const Date = dynamic(() => import("@/components/preview/date/Date"), {
  ssr: false,
});

const MobileComplete = () => {
  return (
    <div className={`text-default-black flex-center relative font-bookk`}>
      <div
        className={`w-full max-w-[450px] flex flex-col
        overflow-scroll lg:rounded-[24px] shadow-md `}
      >
        <div className="relative shadow-sm">
          {/*<Sound />*/}
          <Template1 />
        </div>

        <Greeting />
        <Date />
        <Gallery />
        <Location />
        {/*<Board />*/}
        <Account />
        <Outro />
        <Share />

        <Footer />
      </div>
    </div>
  );
};

export default MobileComplete;
