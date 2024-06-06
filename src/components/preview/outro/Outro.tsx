import React from "react";

const Outro = () => {
  return (
    <section className="relative h-[200px]">
      <div className="bg-outro-img bg-top  w-full h-full bg-cover bg-no-repeat bg-gray-600"></div>
      <p className="textshadow text-sm leading-7 absolute inset-0 flex items-center justify-center z-50 text-center font-medium text-white">
        응원하고 격려해주신 모든 분들께 감사드리며
        <br /> 행복하게 잘 살겠습니다.
      </p>
    </section>
  );
};

export default Outro;
