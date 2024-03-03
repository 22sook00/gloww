"use client";
import { templateState, weddingDataState } from "@/utils/atom";
import React, { useEffect } from "react";
import { useMemo } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import Iphone from "../assets/Iphone";
import Snow from "../effect/Snow";
import Wave from "../effect/Wave";
import Greeting from "../greeting/Greeting";
import Map from "../map/Map";
import Template1 from "../template/Template1";
import Template2 from "../template/Template2";
import Template3 from "../template/Template3";

const MobilePreview = () => {
  const selectTemplateId = useRecoilValue(templateState);
  const [wedding, setWedding] = useRecoilState(weddingDataState);

  const {
    control,
    setValue,
    formState: { errors, dirtyFields },
  } = useFormContext();
  const [design] = useWatch({
    control,
    name: ["design"],
  });

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

  //TODO : 훅으로 따로 빼기
  const useSelectStyle = useMemo(() => {
    if (!Object.keys(design)?.length) return;
    const font = design.font;
    const color = design.color;
    return {
      font,
      color,
    };
  }, [design]);

  //bg-[${useSelectStyle?.color}]
  console.log("design", design.font, useSelectStyle?.color);

  return (
    <aside className={`lg:h-[844px] relative font-${useSelectStyle?.font}`}>
      <div
        style={{ background: useSelectStyle?.color }}
        className={`
        w-[406px]
      flex flex-col h-preview-height lg:fixed top-[124px] 
      overflow-scroll gap-[30px]
      border-dark-outline border-[8px] rounded-[24px] `}
      >
        <div className="relative">{templateSwitch}</div>
        <Greeting />
        {/*<section>{wedding && <Map location={wedding?.location} />}</section>*/}
      </div>
    </aside>
  );
};

export default MobilePreview;
