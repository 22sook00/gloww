import React from "react";

const Snow = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0 z-50">
      <div>
        <canvas
          height="318"
          width="400"
          data-testid="SnowfallCanvas"
          className="pointer-events-none bg-transparent absolute top-0 left-0 w-full h-full"
        ></canvas>
      </div>
    </div>
  );
};

export default Snow;
