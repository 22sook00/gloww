"use client";
import React, { useEffect } from "react";
import Dropdown from "../dropdown/Dropdown";
import { templateState } from "@/utils/atom";
import { useSetRecoilState } from "recoil";
import Tab from "../tab/Tab";
import FormSectionLayout from "../layout/FormSectionLayout";
import { COLOR_ARR, EFFECT_ARR, TEMPLATE_ARR } from "@/data/staticData";
import { useFormContext } from "react-hook-form";

const DesignForm = () => {
  const setSelectId = useSetRecoilState(templateState);

  const handleClickTemplate = (templateId: number) => {
    setSelectId(templateId);
  };

  const {
    control,
    setValue,
    watch,
    formState: { errors, dirtyFields },
  } = useFormContext();

  useEffect(() => {
    console.log("GET::", watch("effect"));
  }, [watch]);

  const handleColorClick = (color: string) => {
    setValue("templateColor", color);
  };
  return (
    <Dropdown title={"디자인"}>
      <div className="form-section-layout gap-6">
        <FormSectionLayout subTitle="메인 사진">
          <div className="w-[150px] h-[150px] bg-gray-300"></div>
        </FormSectionLayout>
        <FormSectionLayout subTitle="템플릿 디자인">
          <ul className="flex-row">
            {TEMPLATE_ARR.map((btn) => {
              return (
                <li key={btn.templateId}>
                  <button
                    className="default-btn"
                    type="button"
                    onClick={() => handleClickTemplate(btn.templateId)}
                  >
                    {btn.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </FormSectionLayout>
        <FormSectionLayout subTitle="청첩장 컬러">
          <div className="flex-row">
            {COLOR_ARR.map((color) => {
              return (
                <div
                  onClick={() => handleColorClick(color.name)}
                  key={color.colocId}
                  className={`
                  cursor-pointer
                  w-[52px] h-[52px] rounded-xl ${color.name}
                  ${
                    watch("templateColor") === color.name &&
                    "border border-default-black"
                  }
                  `}
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
                  value={"effect"}
                  key={effect.effectId}
                  text={effect.name}
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
