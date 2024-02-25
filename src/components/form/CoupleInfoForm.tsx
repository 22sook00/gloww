"use client";
import React from "react";
import { WEDDING_OBJ } from "@/data/weddingObj";
import Dropdown from "../dropdown/Dropdown";
import FormSectionLayout from "../layout/FormSectionLayout";
import Input from "../input/Input";

interface CoupleInfoFormProps {
  type?: keyof typeof WEDDING_OBJ; // 'groom' | 'bride'
}

const CoupleInfoForm = ({ type = "groom" }: CoupleInfoFormProps) => {
  const coupleType = WEDDING_OBJ[type];
  return (
    <Dropdown title={`${coupleType}측 정보`}>
      <div className="form-section-layout gap-6 ">
        <FormSectionLayout subTitle={`${coupleType} 성함`}>
          <Input value={"groom"} />
        </FormSectionLayout>
        <FormSectionLayout subTitle={`${coupleType} 연락처`}>
          <Input value={"bride"} />
        </FormSectionLayout>
        <FormSectionLayout
          subTitle={`${coupleType} 아버님 성함`}
          checkLabel="고인"
        >
          <Input value={"bride"} />
        </FormSectionLayout>
        <FormSectionLayout subTitle={`${coupleType} 아버님 연락처`}>
          <Input value={"bride"} />
        </FormSectionLayout>
        <FormSectionLayout
          subTitle={`${coupleType} 어머님 성함`}
          checkLabel="고인"
        >
          <Input value={"bride"} />
        </FormSectionLayout>
        <FormSectionLayout subTitle={`${coupleType} 어머님 연락처`}>
          <Input value={"bride"} />
        </FormSectionLayout>
      </div>
    </Dropdown>
  );
};

export default CoupleInfoForm;
