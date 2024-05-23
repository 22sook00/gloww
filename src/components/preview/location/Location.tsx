import Fade from "@/components/effect/Fade";
import { weddingDataState } from "@/utils/atom";
import { formatTransportation } from "@/utils/format";
import { locationLink } from "@/utils/link";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRecoilValue } from "recoil";
import Map from "./Map";

const Location = () => {
  const { location } = useRecoilValue(weddingDataState);

  return (
    <section className="py-[50px] px-[15px] shadow-sm">
      <div className=" flex-col-default items-center ">
        <p className="sub-title">LOCATION</p>
        <p>오시는길</p>
        <div className="flex flex-col justify-center items-center my-4">
          <p className="leading-7">
            {location.name} {location.detail}
          </p>
          <p className="text-sm mt-1 text-light-black">{location.address}</p>
        </div>
        <Map location={location} />
        <div className="grid grid-cols-3 gap-2 font-pretendard text-sm mb-7">
          <Link
            href={locationLink.naver}
            target={"_blank"}
            className="
          shadow 
          border-1 
          border-tint-gray
          flex gap-1 bg-white py-2 px-3 justify-center rounded "
          >
            <Image
              src="/imgs/navermap.png"
              alt="naver-map"
              width={20}
              height={20}
            />

            <span>네이버지도</span>
          </Link>
          <Link
            href={locationLink.kakao}
            className="shadow 
          border-1 
          border-tint-gray
          flex gap-1 bg-white py-2 px-3 justify-center rounded"
          >
            <Image
              src="/imgs/kakaomap.png"
              alt="kakao-map"
              width={20}
              height={20}
            />
            <span>카카오맵</span>
          </Link>
          <Link
            href={locationLink.t}
            className="shadow 
          border-1 
          border-tint-gray
          flex gap-1 bg-white py-2 px-3 justify-center rounded"
          >
            <Image src="/imgs/tmap.png" alt="t-map" width={20} height={20} />
            <span>티맵</span>
          </Link>
        </div>
      </div>

      <div className=" flex-col-default gap-8">
        {location.waytocome.map((transportation, idx) => {
          return (
            <div
              className="w-full flex-col-default gap-8"
              key={`transportation-${idx}`}
            >
              <div className="flex-col-default gap-3">
                <p className=" = font-semibold">
                  {formatTransportation[transportation.type]}
                </p>
                <p
                  className="
               whitespace-pre-line
              text-light-black text-sm break-keep leading-6"
                >
                  {transportation.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Location;
