"use client";
import React from "react";
import Dropdown from "../dropdown/Dropdown";
import Input from "../input/Input";
import FormSectionLayout from "../layout/FormSectionLayout";

const AccountForm = () => {
  return (
    <Dropdown title={"마음 전하실 곳"}>
      <div className="form-section-layout gap-6">
        <FormSectionLayout subTitle="신랑 계좌번호" checkLabel="예금주 동일">
          <Input value={"groom"} />
        </FormSectionLayout>
        <FormSectionLayout subTitle="신부 계좌번호" checkLabel="예금주 동일">
          <Input value={"groom"} />
        </FormSectionLayout>
      </div>
    </Dropdown>
  );
};

export default AccountForm;
