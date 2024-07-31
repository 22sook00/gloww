"use client";
import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Wave from "../effect/Wave";
import { dynamicBlurUrl } from "@/utils/dynamicBlurUrl";
import { mainImgLink } from "@/src/utils/link";
const Template1 = () => {
  const [photo, setPhoto] = useState<any>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const photosArray = mainImgLink.map(async (photo) => ({
        ...photo,
        blurHash: await dynamicBlurUrl(photo.url),
      }));

      const photos = await Promise.all(photosArray);
      setPhoto(photos);
    };

    fetchPhotos();
  }, []);

  return (
    <section className="pb-[50px] relative">
      <div className="relative min-h-[525px] gradient">
        {/*<div className="absolute top-10 left-[22%] flex-center flex-col gap-0">
          <div className="flex-row gap-6 text-[21px] mt-10 mb-6 text-dark-black font-bold tracking-[4px]">
            <p>허용준</p>
            <p>&</p>
            <p>이숙영</p>
          </div>
          <div className="flex-center flex-col gap-1 text-light-black text-sm leading-6">
            <p>2024. 09. 07. 토요일 12시 20분</p>
            <p>상암 월드컵컨벤션 임페리얼홀</p>
          </div>
        </div>*/}

        {photo?.map((img: any, id: number) => {
          return (
            <Fragment key={`main-${id}`}>
              <Image
                src={img.url}
                alt="main-1"
                quality={100}
                priority={true}
                placeholder="blur"
                blurDataURL={img.blurHash}
                className="w-full absolute top-[-5px]"
                fill
                sizes="(min-width: 808px) 50vw, 100vw"
                style={{
                  objectFit: "cover", // cover, contain, none
                }}
              />
              {/*<img
                src={"/imgs/gallery/grayscale3.jpg"}
                alt="main-1"
                className="w-screen object-contain absolute top-[-5px]"
              />*/}
              <Wave />
            </Fragment>
          );
        })}
      </div>

      <div className="flex-center flex-col gap-0">
        <div className="flex-row gap-6 text-[21px] mt-10 mb-6 text-dark-black font-medium tracking-[4px]">
          <p>허용준</p>
          <p>&</p>
          <p>이숙영</p>
        </div>
        <div className="flex-center flex-col gap-1 text-light-black text-sm leading-6">
          <p>2024. 09. 07. 토요일 12시 20분</p>
          <p>상암 월드컵컨벤션 임페리얼볼룸</p>
        </div>
      </div>
      <div
        className="absolute top-4 left-4 
        line
      
      border border-[2px solid rgb(239, 239, 239)]"
      />
    </section>
  );
};

export default Template1;
