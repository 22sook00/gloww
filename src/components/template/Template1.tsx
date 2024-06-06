import React from "react";
import Image from "next/image";
import Wave from "../effect/Wave";
const Template1 = () => {
  return (
    <section className="pb-[50px] ">
      <div className="relative min-h-[514px]">
        <Image
          src="/imgs/textmain-lightpink.png"
          alt="sample1"
          width={330}
          height={100}
          placeholder="blur"
          priority={true}
          blurDataURL="/imgs/mainSample0.jpg"
          className="w-full "
        />
        <Wave />
      </div>
      <div className="flex-center flex-col gap-0">
        <div className="flex-row gap-6 text-[21px] mt-8 mb-6 text-default-black font-medium tracking-[5px]">
          <p>허용준</p>
          <p>&</p>
          <p>이숙영</p>
        </div>
        <div className="flex-center flex-col gap-1 text-light-black text-sm leading-6">
          <p>2024. 09. 07. 토요일 12시 20분</p>
          <p>상암 월드컵컨벤션 임페리얼홀</p>
        </div>
      </div>
    </section>
  );
};

export default Template1;
