import React, { useEffect } from "react";

import CallIcon from "@/components/assets/Call";
import { useRecoilValue } from "recoil";
import { weddingDataState } from "@/utils/atom";
import Dot from "@/src/components/assets/Dot";

const Greeting = () => {
  const { groom, bride } = useRecoilValue(weddingDataState);

  return (
    <section className="bg-light-beige p-5 shadow-sm">
      <article className="bg-white py-10 px-6">
        <h3 className="text-[20px] mb-6 text-[#89757a]">결혼합니다</h3>

        <p className="text-sm font-medium leading-[32px] text-dark-gray">
          하나님 안에서 키워온 10년의
          <span className="text-[#a96b6c]"> 사랑</span>, <br />
          이제는 <span className="font-semibold">하나님께서 주신 마음</span>으로
          결단하여 <br />
          하나의 가정을 이루고자 합니다.
          <br />
          <br />늘 하나님만 의지하며
          <br /> 세상의 빛과 소금이 되어 살아가겠습니다.
          <br />
          <br />
          저희의 결혼예배 자리에 함께하시어 <br />
          축복으로 자리를 빛내주시길 바랍니다.
        </p>

        <div className="my-8  border-[0.5px] border-light-outline" />
        <div className=" text-sm text-default-black flex-row justify-around  mb-2">
          <div className="flex-row items-center gap-2  w-[190px]">
            <span>
              {groom.parents[0]?.isDead && "故"}
              {groom.parents[0]?.name} · {groom.parents[1]?.name}
            </span>
            <span className="text-default-gray text-xs">의 장남</span>
            <h5 className=" font-medium">{groom.name.slice(1)}</h5>
          </div>
          <div className="flex gap-2">
            <Dot />
            <Dot />
            <Dot />
          </div>
          <a className="cursor-pointer" href={`tel:${groom?.phoneNumber}`}>
            <CallIcon />
          </a>
        </div>
        <div className="text-sm text-default-black flex-row justify-around ">
          <div className="flex-row items-center gap-2  w-[190px] ">
            <h5 className="">
              {bride.parents[0]?.isDead && "故"}
              {bride.parents[0]?.name} · {bride.parents[1]?.name}
            </h5>
            <span className="text-default-gray text-xs"> 의 장녀 </span>
            <h5 className=" font-medium">{bride.name.slice(1)}</h5>
          </div>
          <div className="flex gap-2">
            <Dot />
            <Dot />
            <Dot />
          </div>
          <a className="cursor-pointer" href={`tel:${bride?.phoneNumber}`}>
            <CallIcon />
          </a>
        </div>
      </article>
    </section>
  );
};

export default Greeting;
