import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./swiper.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import Dialog from "../dialog/Dialog";
import { Navigation, Pagination } from "swiper";

const ImageViewer = ({
  images,
  open = false,
  selectedIdx,
  onClose,
}: {
  images: { id: number; url: string; blurHash: any }[];
  open: boolean;
  selectedIdx: number;
  onClose: () => void;
}) => {
  if (!open) {
    return null;
  }
  return (
    <Dialog handleClosePopup={onClose} isBackground={false}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        initialSlide={selectedIdx}
        navigation

        //pagination={{ clickable: true }}
      >
        {images.map((src, idx) => {
          return (
            <SwiperSlide key={idx}>
              <Image
                src={src.url}
                alt="thumbnail-img"
                width={300}
                height={450}
                quality={100}
                placeholder="blur"
                blurDataURL={src.blurHash}
                //sizes={"100%"}
                className="rounded object-contain h-full"
              />
              {/*<img
                src={src.url}
                alt="thumbnail-img"
                className="object-contain h-full"
              />*/}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Dialog>
  );
};

export default ImageViewer;
