import React, { useState } from "react";
import ImageViewer from "@/components/img/ImgViewer";
import { imgLink } from "@/utils/link";
import Image from "next/image";

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
      <div className=" flex-col-default items-center">
        <p className="sub-title">GALLERY</p>
        <p>갤러리</p>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-3 gap-2 mt-4 mb-2">
          {imgLink.map((img, id) => (
            <div
              key={id}
              className="w-full h-0 relative"
              style={{ paddingBottom: "100%" }}
            >
              <Image
                src={img.url}
                alt={`Small ${id}`}
                width={300}
                height={300}
                className="absolute inset-0 w-full h-full rounded-sm cursor-pointer object-cover"
                placeholder="blur"
                blurDataURL={img.url}
                onClick={() => handleSelectedImg(img.id)}
              />
            </div>
          ))}
        </div>
      </div>

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
