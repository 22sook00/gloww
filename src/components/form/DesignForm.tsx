"use client";
import React from "react";
import Dropdown from "../dropdown/Dropdown";
import { templateState } from "@/utils/atom";
import { useSetRecoilState } from "recoil";

const templateArr = [
  { templateId: 1, name: "템플릿1" },
  { templateId: 2, name: "템플릿2" },
  { templateId: 3, name: "템플릿3" },
];

const DesignForm = () => {
  const setSelectId = useSetRecoilState(templateState);

  const handleClickTemplate = (templateId: number) => {
    setSelectId(templateId);
  };
  return (
    <Dropdown title={"디자인"}>
      <div>
        메인 사진
        <ul className="flex-row">
          {templateArr.map((btn) => {
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
      </div>
    </Dropdown>
  );
};

export default DesignForm;
