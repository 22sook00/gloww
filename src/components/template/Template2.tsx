import React from "react";
import Image from "next/image";
import Wave from "../effect/Wave";

const Template2 = () => {
  return (
    <section className="p-[30px] pb-0">
      <div className="flex flex-col items-start mb-10">
        <div className="flex flex-col  gap-3 text-[22px] mb-6 text-default-black">
          <p>이숙영</p>
          <p>허용준</p>
          <p className="border border-dark-outline"></p>
        </div>

        <div className="flex flex-col items-start gap-1 text-light-black">
          <p>2024. 09. 14. 토요일 2시</p>
          <p>더 청담 3F 노블레스홀</p>
        </div>
      </div>
      <div className="relative">
        <Image
          src="/imgs/mainSample0.jpg"
          alt="sample1"
          width={330}
          height={100}
          placeholder="blur"
          blurDataURL="/imgs/mainSample0.jpg"
        />
        <Wave />
      </div>
    </section>
  );
};

export default Template2;
