"use client";
import React, { useEffect } from "react";
import Dropdown from "../dropdown/Dropdown";
import { templateState } from "@/utils/atom";
import { useSetRecoilState } from "recoil";
import Tab from "../tab/Tab";
import FormSectionLayout from "../layout/FormSectionLayout";
import {
  COLOR_ARR,
  EFFECT_ARR,
  TEMPLATE_ARR,
  FONT_ARR,
} from "@/data/staticData";
import { useFormContext, useWatch } from "react-hook-form";
import UploadImg from "../img/UploadImg";

const DesignForm = () => {
  const setSelectId = useSetRecoilState(templateState);

  const handleClickTemplate = (templateId: number) => {
    setSelectId(templateId);
  };

  const {
    control,
    setValue,
    formState: { errors, dirtyFields },
  } = useFormContext();

  const [design] = useWatch({
    control,
    name: ["design"],
  });

  const handleColorClick = (color: string) => {
    setValue("design.color", color);
  };
  return (
    <Dropdown title={"디자인"}>
      <div className="form-section-layout gap-6">
        <FormSectionLayout subTitle="메인 사진">
          <UploadImg />
        </FormSectionLayout>
        <FormSectionLayout subTitle="메인 템플릿 디자인">
          <ul className="w-full h-[192px] grid grid-cols-3 gap-4 ">
            {TEMPLATE_ARR.map((btn) => {
              return (
                <li
                  key={btn.templateId}
                  className={`
                  
                  ${
                    design.template === btn.code &&
                    "border border-light-gray ring-2"
                  }
                  w-full bg-slate-300 rounded-md`}
                  onClick={() => handleClickTemplate(btn.templateId)}
                ></li>
              );
            })}
          </ul>
        </FormSectionLayout>
        <FormSectionLayout subTitle="메인 폰트">
          <div className="flex-row">
            {FONT_ARR.map((font) => {
              return (
                <Tab
                  font={font.code}
                  value={"design.font"}
                  key={font.fontId}
                  text={font.name}
                  code={font.code}
                />
              );
            })}
          </div>
        </FormSectionLayout>
        <FormSectionLayout subTitle="메인 컬러">
          <div className="flex-row">
            {COLOR_ARR.map((color) => {
              return (
                <div
                  onClick={() => handleColorClick(color.name)}
                  key={color.colocId}
                  className={`
                  cursor-pointer
                  w-[52px] h-[52px] rounded-xl focus:ring-2 ring-offset-2
                  ${
                    design.color === color.code &&
                    "border border-light-gray ring-2"
                  }
                  `}
                  style={{ background: color.name }}
                />
              );
            })}
          </div>
        </FormSectionLayout>
        <FormSectionLayout subTitle="메인 사진 효과">
          <div className="flex-row">
            {EFFECT_ARR.map((effect) => {
              return (
                <Tab
                  value={"design.effect"}
                  key={effect.effectId}
                  text={effect.name}
                  code={effect.code}
                />
              );
            })}
          </div>
        </FormSectionLayout>
      </div>
    </Dropdown>
  );
};

export default DesignForm;
