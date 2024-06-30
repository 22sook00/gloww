import React from "react";

const Wave = ({ isTop = false }) => {
  return (
    <div className={`w-full absolute bottom-0`}>
      <svg
        className="relative w-full h-[60px]"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            href="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(250, 250, 250,0.6)"
            className="wave1"
          />
          <use
            href="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(250, 250, 250,0.5)"
            className="wave2"
          />
          <use
            href="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(250, 250, 250,0.3)"
            className="wave3"
          />
          <use
            href="#gentle-wave"
            x="48"
            y="7"
            fill="rgba(250, 250, 250,0.2)"
            className="wave4"
          />
        </g>
      </svg>

      <div className="content flex justify-center items-center text-center bg-white"></div>
    </div>
  );
};

export default Wave;
