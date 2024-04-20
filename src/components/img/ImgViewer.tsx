import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./swiper.css";
import Dialog from "../dialog/Dialog";

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
    <Dialog>
      <CloseButton
        className={
          "w-5 h-5 text-white absolute top-2.5 right-2.5 z-10 cursor-pointer"
        }
        onClose={onClose}
      />
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        initialSlide={selectedIdx}
      >
        {images.map((src, idx) => {
          return (
            <SwiperSlide key={idx}>
              <img src={src.url} alt="img" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Dialog>
  );
};
const CloseButton = ({
  onClose,
  className,
}: {
  onClose: () => void;
  className: string;
}) => {
  return (
    <svg
      onClick={onClose}
      className={className}
      id="Layer_1"
      version="1.1"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
    </svg>
  );
};
export default ImageViewer;
