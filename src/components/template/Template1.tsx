"use client";
import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Wave from "../effect/Wave";
import { dynamicBlurUrl } from "@/utils/dynamicBlurUrl";
import { mainImgLink } from "@/src/utils/link";
import { weddingDataState } from "@/src/utils/atom";
import { useRecoilValue } from "recoil";
import { formatDate } from "@/src/utils/format";
const Template1 = () => {
  const { groom, bride, location, date } = useRecoilValue(weddingDataState);
  const [photo, setPhoto] = useState<any>([]);

  const { datePart, timePart } = formatDate(date.date);

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
              <Wave />
            </Fragment>
          );
        })}
      </div>

      <div className="flex-center flex-col gap-0">
        <div className="flex-row gap-6 text-[21px] mt-10 mb-6 text-dark-black font-medium tracking-[4px]">
          <p>{groom.name}</p>
          <p>&</p>
          <p>{bride.name}</p>
        </div>
        <div className="flex-center flex-col gap-1 text-light-black text-sm leading-6">
          <p>
            {datePart} {timePart}
          </p>
          <p>
            {location.name} {location.detail}
          </p>
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
