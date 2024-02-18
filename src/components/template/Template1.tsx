import React from "react";
import Image from "next/image";
const Template1 = () => {
  return (
    <div className="w-[390px] h-[700px] absolute top-24 left-10 overflow-scroll p-[30px]">
      <Image
        src="/imgs/mainSample.png"
        alt="sample1"
        width={390}
        height={100}
        placeholder="blur"
        blurDataURL="/imgs/mainSample.png"
      />
      <div className="flex-center flex-col gap-0">
        <div className="flex-row gap-6 text-xl mt-6 mb-4 text-default-black">
          <p>이숙영</p>
          <p>&</p>
          <p>허용준</p>
        </div>
        <div className="flex-center flex-col gap-1 text-light-black">
          <p>2024. 09. 14. 토요일 2시</p>
          <p>더 청담 3F 노블레스홀</p>
        </div>
      </div>
    </div>
  );
};

export default Template1;
