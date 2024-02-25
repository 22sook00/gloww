"use client";
import React from "react";
import Calendar from "@/components/date/Calendar";
import Dropdown from "../dropdown/Dropdown";

import FormSectionLayout from "../layout/FormSectionLayout";
import Time from "../date/Time";

const WeddingDateForm = () => {
  return (
    <Dropdown title={"예식일자"}>
      <div>
        <FormSectionLayout subTitle="예식일자 선택" checkLabel="디데이 표시">
          <div className="w-full grid grid-cols-[1fr,_138px] gap-3">
            <Calendar />
            <Time />
          </div>
        </FormSectionLayout>
      </div>
    </Dropdown>
  );
};

export default WeddingDateForm;
