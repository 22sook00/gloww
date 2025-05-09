import React from "react";

const Outro = () => {
  return (
    <section className="relative h-[200px]">
      <div className="bg-outro-img bg-top  w-full h-full bg-cover bg-no-repeat bg-gray-600"></div>
      <p className="textshadow text-sm leading-7 absolute inset-0 flex items-center justify-center z-10 text-center font-medium text-white">
        골로새서 3장 14절
        <br /> 이 모든 것 위에 사랑을 더하라 이는 온전하게 매는 띠니라
      </p>
    </section>
  );
};

export default Outro;
