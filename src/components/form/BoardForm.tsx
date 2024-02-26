"use client";
import React from "react";
import Dropdown from "../dropdown/Dropdown";
import Input from "../input/Input";
import FormSectionLayout from "../layout/FormSectionLayout";
import TextEditor from "../textEditor/TextEditor";

const BoardForm = () => {
  return (
    <Dropdown title="방명록">
      <div className="form-section-layout gap-6">
        <FormSectionLayout subTitle="방명록 비밀번호(4~12자)">
          <Input value={"groom"} />
        </FormSectionLayout>
        <FormSectionLayout subTitle="방명록 레이아웃">
          <TextEditor />
        </FormSectionLayout>
      </div>
    </Dropdown>
  );
};

export default BoardForm;
