"use client";
import { templateState, weddingDataState } from "@/utils/atom";
import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Iphone from "../assets/Iphone";
import Template1 from "../template/Template1";
import Template2 from "../template/Template2";
import Template3 from "../template/Template3";

const MobilePreview = () => {
  const selectTemplateId = useRecoilValue(templateState);
  const setWedding = useSetRecoilState(weddingDataState);

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

  useEffect(() => {
    fetch("http://localhost:8888/wedding")
      .then((res) => {
        if (res.ok === false) {
          throw new Error("청첩장 정보를 불러오지 못했습니다.");
        }
        return res.json();
      })
      .then((data) => {
        console.log("da", data);
        setWedding(data);
      })
      .catch((err) => {
        console.dir(err, "에러발생");
      });
  }, []);

  return (
    <aside className="h-[844px] relative ">
      <Iphone />
      {templateSwitch}
    </aside>
  );
};

export default MobilePreview;
