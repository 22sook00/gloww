"use client";
import { templateState, weddingDataState } from "@/utils/atom";
import React, { useEffect } from "react";
import { useMemo } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Iphone from "../assets/Iphone";
import Greeting from "../greeting/Greeting";
import Map from "../map/Map";
import Template1 from "../template/Template1";
import Template2 from "../template/Template2";
import Template3 from "../template/Template3";

const MobilePreview = () => {
  const selectTemplateId = useRecoilValue(templateState);
  const [wedding, setWedding] = useRecoilState(weddingDataState);

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
        setWedding(data);
      })
      .catch((err) => {
        console.dir(err, "에러발생");
      });
  }, []);

  return (
    <aside className="h-[844px] relative ">
      <div className="flex flex-col h-preview-height fixed top-[124px] overflow-scroll gap-[30px] border-dark-outline border-[8px] rounded-[24px] bg-white">
        {templateSwitch}
        <Greeting />
        {/*<section>{wedding && <Map location={wedding?.location} />}</section>*/}
      </div>
    </aside>
  );
};

export default MobilePreview;
