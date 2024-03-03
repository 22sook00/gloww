"use client";
import { OUTRO_ARR } from "@/data/staticData";
import React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import Dropdown from "../dropdown/Dropdown";
import UploadImg from "../img/UploadImg";
import FormSectionLayout from "../layout/FormSectionLayout";
import Tab from "../tab/Tab";
import TextEditor from "../textEditor/TextEditor";

const OutroForm = () => {
  const {
    control,
    setValue,
    formState: { errors, dirtyFields },
  } = useFormContext();

  const [outro] = useWatch({
    control,
    name: ["outro"],
  });

  return (
    <Dropdown title={"아웃트로"}>
      <div className="form-section-layout gap-6">
        <FormSectionLayout subTitle="아웃트로 사진" checkLabel="사진 선택 안함">
          <UploadImg />
        </FormSectionLayout>
        <FormSectionLayout subTitle="아웃트로 입력">
          <TextEditor />
        </FormSectionLayout>
        <FormSectionLayout subTitle="아웃트로 예시 보기">
          <div className=" overflow-x-scroll">
            <div className="flex-row ">
              {OUTRO_ARR.map((outro) => {
                return (
                  <Tab
                    value={"outro.type"}
                    key={outro.outroId}
                    text={outro.name}
                    code={outro.code}
                  />
                );
              })}
            </div>
          </div>
        </FormSectionLayout>
      </div>
    </Dropdown>
  );
};

export default OutroForm;
