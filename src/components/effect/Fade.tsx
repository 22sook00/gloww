import React, { useEffect } from "react";
import AOS from "aos";

interface FadeProps {
  children: React.ReactNode;
  duration?: string;
  delay?: string;
  offset?: string;
  anchor?: string;
  isOnce?: string;
  easing?:
    | "ease"
    | "linear"
    | "ease-out"
    | "ease-in-sine"
    | "ease-in-back"
    | "ease-out-cubic";
}
const Fade = ({
  children,
  duration = "1500",
  isOnce = "false",
  delay = "0",
  offset = "0",
  easing = "linear",
  anchor,
}: FadeProps) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-once={isOnce}
      data-aos-offset={offset}
      data-aos-delay={delay}
      data-aos-duration={duration}
      data-aos-easing={easing}
      data-aos-anchor={anchor}
    >
      {children}
    </div>
  );
};

export default Fade;
