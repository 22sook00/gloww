"use client";
import React, { useEffect, useState } from "react";
import ImageViewer from "@/components/img/ImgViewer";
import { imgLink } from "@/utils/link";
import Image from "next/image";
import { dynamicBlurUrl } from "@/utils/dynamicBlurUrl";

import { staticBlurUrl } from "@/utils/staticBlurUrl";
const Gallery = () => {
  const [selectedIdx, setSelectedIdx] = useState(-1);
  const [photos, setPhotos] = useState([]);

  const open = selectedIdx > -1;
  const handleSelectedImg = (idx: number) => {
    setSelectedIdx(idx);
  };
  const handleClose = () => {
    setSelectedIdx(-1);
  };
  useEffect(() => {
    const fetchPhotos = async () => {
      const photosArray = imgLink.map(async (photo) => ({
        ...photo,
        blurHash: await dynamicBlurUrl(photo.url),
      }));

      const photos = await Promise.all(photosArray);
      setPhotos(photos);
    };

    fetchPhotos();
  }, []);

  return (
    <section className="py-[50px] px-[15px] bg-light-beige flex-col-default items-center shadow-sm ">
      <div className=" flex-col-default items-center">
        <p className="sub-title">GALLERY</p>
        <p>갤러리</p>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-3 gap-2 mt-4 mb-2 min-h-[450px]">
          {photos?.map((img: any, id: number) => {
            return (
              <div
                key={id}
                className="w-full h-0 relative"
                style={{ paddingBottom: "100%" }}
              >
                <Image
                  src={img.url}
                  alt={`Small ${id}`}
                  width={300}
                  height={450}
                  quality={70}
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  //sizes="(max-width:50px) 2vw, (max-width:415px)50vw, 75vw" //모바일까지 최적화 하기 위해
                  className="absolute inset-0 w-full h-full rounded-sm cursor-pointer object-cover"
                  placeholder="blur"
                  blurDataURL={img.blurHash || staticBlurUrl()}
                  onClick={() => handleSelectedImg(img.id)}
                />
              </div>
            );
          })}
        </div>
      </div>

      <ImageViewer
        open={open}
        onClose={handleClose}
        selectedIdx={selectedIdx}
        images={photos}
      />
    </section>
  );
};

export default Gallery;
