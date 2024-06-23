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
          서로가 마주보며 다져온 <span className="text-[#a96b6c]">사랑</span>을{" "}
          <br />
          이제 함께 한 곳을 바라보며 <br />
          걸어갈 수 있는 큰 사랑으로 <br />
          키우고자 합니다.
          <br />
          저희 두 사람이 사랑의 이름으로
          <br />
          지켜나갈 수 있도록
          <br />
          앞날을 <span className="text-[#a96b6c]">축복</span>해 주시면
          감사하겠습니다.
        </p>

        <div className="my-8  border-[0.5px] border-light-outline" />
        <div className=" text-sm text-default-black flex-row justify-around  mb-2">
          <div className="flex-row items-center gap-2 ">
            <span>
              {groom.parents[0]?.name} · {groom.parents[1]?.name}
            </span>
            <span className="text-default-gray text-xs">의 장남</span>
            <h5 className=" font-medium">용준</h5>
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
          <div className="flex-row items-center gap-2 ">
            <h5 className="">
              {bride.parents[0]?.name} · {bride.parents[1]?.name}
            </h5>
            <span className="text-default-gray text-xs"> 의 장녀 </span>
            <h5 className=" font-medium">숙영</h5>
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
