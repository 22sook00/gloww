import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import Close from "../assets/Close";
import CloseCircle from "@/components/assets/CloseCircle";

interface DialogProps {
  children: React.ReactNode;
  handleClosePopup?: () => void;
  isBackground?: boolean;
  title?: string;
}

const Dialog = ({
  handleClosePopup,
  title,
  children,
  isBackground = true,
}: DialogProps) => {
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

        <div
          className={`relative flex-col flex w-[90%] min-w-[300px] max-w-[370px] min-h-[150px] max-h-[80%]  p-0
        ${isBackground ? "bg-white" : " bg-transparent"}
         animate-show-modal-box rounded shadow-lg`}
        >
          {isBackground && (
            <header
              className={`flex-between w-full h-10 ${
                isBackground ? "p-8" : "p-1"
              }`}
            >
              <div className="w-full text-center text-base leading-[18px] break-keep font-semibold">
                {title}
              </div>
              <div onClick={handleClosePopup} className="cursor-pointer">
                <CloseCircle
                  className={"absolute top-5 right-5 z-10 cursor-pointer"}
                />
              </div>
            </header>
          )}
          <div
            className={`${isBackground ? "px-6 pb-8" : "p-0"} overflow-scroll`}
          >
            {!isBackground && (
              <div onClick={handleClosePopup} className="cursor-pointer">
                <Close
                  className={
                    "w-4 h-4 text-white absolute top-2.5 right-2.5 z-10 cursor-pointer"
                  }
                />
              </div>
            )}
            {children}
          </div>
        </div>
      </div>,
      ref.current
    );
  }
  return null;
};
export default Dialog;
