"use client";
import { GALLARY_ARR } from "@/data/staticData";
import React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import Dropdown from "../dropdown/Dropdown";
import UploadImg from "../img/UploadImg";
import FormSectionLayout from "../layout/FormSectionLayout";
import Tab from "../tab/Tab";

const GallaryForm = () => {
  const {
    control,
    setValue,
    formState: { errors, dirtyFields },
  } = useFormContext();

  const [gallary] = useWatch({
    control,
    name: ["gallary"],
  });

  return (
    <Dropdown title={"갤러리"}>
      <div className="form-section-layout gap-6">
        <FormSectionLayout subTitle="갤러리 레이아웃">
          <div className="flex-row">
            {GALLARY_ARR.map((gallary) => {
              return (
                <Tab
                  value={"gallary.layout"}
                  key={gallary.gallaryId}
                  text={gallary.name}
                  code={gallary.code}
                />
              );
            })}
          </div>
        </FormSectionLayout>

        <FormSectionLayout subTitle="갤러리 업로드">
          <UploadImg />
        </FormSectionLayout>
      </div>
    </Dropdown>
  );
};

export default GallaryForm;
