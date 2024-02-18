"use client";
import { templateState } from "@/utils/atom";
import React from "react";
import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import Iphone from "../assets/Iphone";
import Template1 from "../template/Template1";
import Template2 from "../template/Template2";
import Template3 from "../template/Template3";

const MobilePreview = () => {
  const selectTemplateId = useRecoilValue(templateState);

  const templateSwitch = useMemo(() => {
    switch (selectTemplateId) {
      case 2:
        return <Template2 />;
      case 3:
        return <Template3 />;
      default:
        return <Template1 />;
    }
  }, [selectTemplateId]);

  return (
    <section>
      <aside className="h-[844px] relative ">
        <Iphone />
        {templateSwitch}
      </aside>
    </section>
  );
};

export default MobilePreview;
