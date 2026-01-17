import React from "react";

const Outro = () => {
  return (
    <section className="relative h-[200px]">
      <div className="bg-outro-img bg-[position:center_70%] w-full h-full bg-cover bg-no-repeat bg-gray-600 brightness-75"></div>
      <p className="textshadow text-sm leading-7 absolute inset-0 flex items-center justify-center z-10 text-center font-medium text-white">
        서로에게 가장 편안한 사람이 되어
        <br /> 오늘보다 더 좋은 내일을 함께하려 합니다.
        <br />
        설렘 가득한 이 날,
        <br /> 저희의 시작을 함께 축하해 주세요.
      </p>
    </section>
  );
};

export default Outro;
