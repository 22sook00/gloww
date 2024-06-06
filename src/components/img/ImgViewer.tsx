import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./swiper.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Dialog from "../dialog/Dialog";
import { Navigation, Pagination } from "swiper";

const ImageViewer = ({
  images,
  open = false,
  selectedIdx,
  onClose,
}: {
  images: { id: number; url: string }[];
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
              <img
                src={src.url}
                alt="img"
                className="rounded object-contain h-full"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Dialog>
  );
};

export default ImageViewer;
