import React from "react";
import Image from "next/image";
import Map from "../map/Map";
import { useRecoilValue } from "recoil";
import { weddingDataState } from "@/utils/atom";

const Template3 = () => {
  const wedding = useRecoilValue(weddingDataState);
  return (
    <div className="flex flex-col gap-[30px] w-[389px] h-[700px] absolute top-24 left-10 overflow-y-scroll py-[30px]">
      <section>
        <div className="border border-light-outline ml-[30px]">
          <div className="h-[250px] overflow-hidden ">
            <div className="my-2 ml-2 flex h-[234px] ">
              <Image
                src="/imgs/mainSample.png"
                alt="sample1"
                width={350}
                height={100}
                placeholder="blur"
                blurDataURL="/imgs/mainSample.png"
                className=" object-cover object-top"
              />
            </div>
          </div>
        </div>

        <div className="flex items-end flex-col gap-0 mr-[30px]">
          <div className="flex-row gap-6 text-xl mt-6 mb-2 text-default-black">
            <p>이숙영</p>
            <p>/</p>
            <p>허용준</p>
          </div>
          <div className="flex flex-col items-end gap-1 text-light-black">
            <p>2024. 09. 14. 토요일 2시</p>
            <p>더 청담 3F 노블레스홀</p>
          </div>
        </div>
      </section>
      <section>{wedding && <Map location={wedding?.location} />}</section>
    </div>
  );
};

export default Template3;
