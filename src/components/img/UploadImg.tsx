import React, { ChangeEvent, useRef, useState } from "react";
import Image from "next/image";
import { useFormContext, useWatch } from "react-hook-form";
import { ReactSortable } from "react-sortablejs";
import XIcon from "@/components/assets/Close";
import Spinner from "../loading/Spinner";
import UploadIcon from "@/components/assets/Upload";
import EditIcon from "@/components/assets/Edit";

const MAX_FILE_SIZE = 1024 ** 2 * 20; // 20MB

const UploadImg = ({ type = "edit" }) => {
  const mainImageRef = useRef<HTMLInputElement>(null);
  const [isMainImageLoading, setIsMainImageLoading] = useState(false);
  const {
    control,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
  } = useFormContext();

  const [images, thumbnailImage] = useWatch({
    control,
    name: ["images", "thumbnailImage"],
  });

  const [imageSrc, setImageSrc]: any = useState(null);

  const handleMainImageInput = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    //setIsMainImageLoading(true);
    file && reader.readAsDataURL(file);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setIsMainImageLoading(false);
        setImageSrc(reader.result || null); // 파일의 컨텐츠
        resolve();
      };
    });
  };
  return (
    <div>
      <input
        style={{ display: "none" }}
        ref={mainImageRef}
        type="file"
        accept="image/jpg,image/jpeg,image/png,image/gif,image/bmp"
        name="main-image"
        onChange={handleMainImageInput}
      />
      <div className="relative  flex-row  rounded-md">
        {isMainImageLoading && (
          <div className="flex-center  w-[150px] h-[150px]  overflow-hidden relative bg-light-gray rounded border border-dashed">
            <Spinner />
          </div>
        )}
        {!isMainImageLoading && imageSrc && (
          <div className="relative group/item flex-row w-[150px] h-[150px] overflow-hidden cursor-pointer  bg-light-gray rounded border border-dashed">
            {/*타입이 x 면*/}
            {type === "x" && (
              <div
                className="absolute top-2 right-0 w-5 h-5 overflow-hidden cursor-pointer  invisible group-hover/item:visible"
                onClick={() => {
                  setImageSrc(null);
                }}
              >
                <XIcon />
              </div>
            )}
            <Image
              src={imageSrc}
              alt="상품 대표이미지"
              width={150}
              height={150}
              onClick={() =>
                mainImageRef.current && mainImageRef.current.click()
              }
            />
            {/*타입이 하단수정이면*/}
            {type === "edit" && (
              <div
                className="absolute bottom-0 right-0 flex-center gap-2 w-full h-9 overflow-hidden bg-opacity-gray invisible group-hover/item:visible"
                onClick={() => {
                  setImageSrc(null);
                }}
              >
                <p className="text-sm text-white">이미지 수정</p>
                <EditIcon style={{ stroke: "#fff" }} />
              </div>
            )}
          </div>
        )}
        <div className="relative">
          {!isMainImageLoading && !imageSrc && (
            <label
              onClick={() =>
                mainImageRef.current && mainImageRef.current.click()
              }
            >
              <div className="relative flex-center gap-[10px] flex-col h-full cursor-pointer">
                <UploadIcon />
                <p className=" text-default-gray text-sm">사진 업로드</p>
              </div>
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadImg;
