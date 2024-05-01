import React from "react";
import CallIcon from "@/components/assets/Call";
import { useRecoilValue } from "recoil";
import { weddingDataState } from "@/utils/atom";

const Greeting = () => {
  const { groom, bride } = useRecoilValue(weddingDataState);

  return (
    <section className="bg-light-beige p-[30px] shadow-sm">
      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <article className="bg-white py-10 px-6">
          <h3 className="text-lg mb-6">결혼합니다</h3>
          <p className="text-sm leading-[32px] text-default-gray">
            서로가 마주보며 다져온 사랑을 <br />
            이제 함께 한 곳을 바라보며 <br />
            걸어갈 수 있는 큰 사랑으로 <br />
            키우고자 합니다.
            <br />
            저희 두 사람이 사랑의 이름으로
            <br />
            지켜나갈 수 있도록
            <br />
            앞날을 축복해 주시면 감사하겠습니다.
          </p>
          <div className="my-8 border border-light-outline" />
          <div className=" text-sm text-default-black flex-row justify-around gap-1 mb-2">
            <h5 className="">
              {groom.parents[0]?.name}﹒{groom.parents[1]?.name}
            </h5>
            <span className="text-default-gray">의 장남</span>
            <h5 className="">용준</h5>
            <span className="text-light-outline tracking-[-5px]">﹒﹒</span>
            <a className="cursor-pointer" href={`tel:${groom?.phoneNumber}`}>
              <CallIcon />
            </a>
          </div>
          <div className="text-sm text-default-black flex-row justify-around gap-2">
            <h5 className="">
              {bride.parents[0]?.name}﹒{bride.parents[1]?.name}
            </h5>
            <span className="text-default-gray"> 의 장녀 </span>
            <h5 className="">숙영</h5>
            <span className="text-light-outline  tracking-[-5px]">﹒﹒</span>
            <a className="cursor-pointer" href={`tel:${bride?.phoneNumber}`}>
              <CallIcon />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Greeting;
