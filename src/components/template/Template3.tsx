import React from "react";
import Image from "next/image";

const Template3 = () => {
  return (
    <section className=" pt-[30px] ">
      <div className="border border-light-outline ml-[30px]">
        <div className="h-[250px] overflow-hidden ">
          <div className="my-2 ml-2 flex h-[234px] ">
            <Image
              src="/imgs/mainSample0.jpg"
              alt="sample1"
              width={350}
              height={100}
              placeholder="blur"
              blurDataURL="/imgs/mainSample0.jpg"
              className=" object-cover object-top"
            />
          </div>
        </div>
      </div>

      <div className="flex items-end flex-col gap-0 mr-[30px]">
        <div className="flex-row gap-6 text-xl mt-6 mb-2 text-default-black">
          <p>이숙영</p>
          <p>/</p>
          <p>허용준</p>
        </div>
        <div className="flex flex-col items-end gap-1 text-light-black">
          <p>2024. 09. 14. 토요일 2시</p>
          <p>더 청담 3F 노블레스홀</p>
        </div>
      </div>
    </section>
  );
};

export default Template3;
