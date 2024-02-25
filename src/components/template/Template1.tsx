import React from "react";
import Image from "next/image";
const Template1 = () => {
  return (
    <section className="p-[30px] pb-0">
      <Image
        src="/imgs/mainSample.png"
        alt="sample1"
        width={330}
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
          <p>2024. 09. 07. 토요일 12시 20분</p>
          <p>더 청담 3F 노블레스홀</p>
        </div>
      </div>
    </section>
  );
};

export default Template1;
