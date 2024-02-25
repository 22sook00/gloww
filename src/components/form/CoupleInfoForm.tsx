"use client";
import React from "react";
import { WEDDING_OBJ } from "@/data/weddingObj";
import Dropdown from "../dropdown/Dropdown";

interface CoupleInfoFormProps {
  type?: keyof typeof WEDDING_OBJ; // 'groom' | 'bride'
}

const CoupleInfoForm = ({ type = "groom" }: CoupleInfoFormProps) => {
  const coupleType = WEDDING_OBJ[type];
  return (
    <Dropdown title={`${coupleType}측 정보`}>
      <div>
        <p>{`${coupleType} 성함`}</p>
        <p>{`${coupleType} 연락처`}</p>
        <p>{`${coupleType} 아버님 성함`}</p>
        <p>{`${coupleType} 아버님 연락처`}</p>
        <p>{`${coupleType} 어머님 성함`}</p>
        <p>{`${coupleType} 어머님 연락처`}</p>
      </div>
    </Dropdown>
  );
};

export default CoupleInfoForm;
