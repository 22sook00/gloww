import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import Close from "../assets/Close";

interface DialogProps {
  children: React.ReactNode;
  handleClosePopup?: () => void;
  title?: string;
}

const Dialog = ({ handleClosePopup, title, children }: DialogProps) => {
  const ref = useRef<HTMLDivElement | any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (document) {
      const dom = document.getElementById("dialog-root");
      ref.current = dom;
    }

    // 배경 스크롤 막기
    document.body.classList.add("hidden-scroll");

    return () => {
      if (
        document.querySelectorAll("#dialog-root > div:not(#products-view)")
          .length === 0
      ) {
        document.body.classList.remove("hidden-scroll");
      }
    };
  }, []);

  if (ref.current && mounted) {
    return ReactDOM.createPortal(
      <div
        className={`flex-col-default gap-0 items-center fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 text-black overflow-y-scroll z-50 animate-show-modal-bg`}
      >
        <div
          onClick={handleClosePopup}
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
        />

        <div className="relative flex-col flex w-[90%] min-w-[300px] max-w-[370px] min-h-[150px] max-h-[80%]  p-0 bg-white animate-show-modal-box rounded shadow-lg">
          <header className="flex-between w-full h-10 p-8">
            <div className="w-full text-center text-base leading-[18px] break-keep font-semibold">
              {title}
            </div>
            <div onClick={handleClosePopup} className="cursor-pointer">
              <Close />
            </div>
          </header>
          <div className="px-8 pb-8 overflow-scroll">{children}</div>
        </div>
      </div>,
      ref.current
    );
  }
  return null;
};
export default Dialog;
