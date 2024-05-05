import Fade from "@/components/effect/Fade";
import ImageViewer from "@/components/img/ImgViewer";
import { imgLink } from "@/utils/link";
import Image from "next/image";
import React, { Fragment, useState } from "react";

const Gallery = () => {
  const [selectedIdx, setSelectedIdx] = useState(-1);

  const open = selectedIdx > -1;
  const handleSelectedImg = (idx: number) => {
    setSelectedIdx(idx);
  };
  const handleClose = () => {
    setSelectedIdx(-1);
  };

  return (
    <section className="py-[50px] px-[15px] bg-light-beige flex-col-default items-center shadow-sm">
      <Fade>
        <div className=" flex-col-default items-center">
          <p className="sub-title">GALLERY</p>
          <p>갤러리</p>
        </div>
      </Fade>
      <Fade>
        <div>
          <div className="grid grid-cols-3 gap-2 mt-4 mb-2">
            <div className="col-span-2 row-span-2">
              <Image
                src={imgLink[0].url}
                alt="Large"
                width={700}
                height={475}
                className="h-full rounded-sm cursor-pointer object-cover"
                onClick={() => handleSelectedImg(imgLink[0].id)}
              />
            </div>
            {[1, 2].map((id) => (
              <div key={id} className={`${id === 0 ? "row-span-2" : ""}`}>
                <Image
                  src={imgLink[id].url}
                  alt={`Small ${id}`}
                  width={350}
                  height={470}
                  className="rounded-sm cursor-pointer h-full object-cover"
                  placeholder="blur"
                  blurDataURL={imgLink[id].url}
                  onClick={() => handleSelectedImg(imgLink[id].id)}
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-2 grid-rows-1">
            <div className="col-span-1">
              <Image
                src={imgLink[3].url}
                alt="Small Top"
                width={50}
                height={100}
                className="w-full h-[49%] mb-2 rounded-sm cursor-pointer object-cover"
                onClick={() => handleSelectedImg(imgLink[3].id)}
              />
              <Image
                src={imgLink[4].url}
                alt="Small Bottom"
                className="w-full h-[49%]rounded-sm cursor-pointer"
                width={50}
                height={100}
                onClick={() => handleSelectedImg(imgLink[4].id)}
              />
            </div>

            <div className="col-span-2">
              <Image
                src={imgLink[5].url}
                alt="Large"
                className="w-full h-auto  rounded-sm cursor-pointer object-cover"
                width={100}
                height={100}
                onClick={() => handleSelectedImg(imgLink[5].id)}
              />
            </div>
          </div>
        </div>
      </Fade>
      <ImageViewer
        open={open}
        onClose={handleClose}
        selectedIdx={selectedIdx}
        images={imgLink}
      />
    </section>
  );
};

export default Gallery;
