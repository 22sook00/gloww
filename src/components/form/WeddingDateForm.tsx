import React from "react";
import Dropdown from "../dropdown/Dropdown";
import FormSectionLayout from "../layout/FormSectionLayout";

const WeddingDateForm = () => {
  return (
    <Dropdown title={"예식일자"}>
      <div>
        <FormSectionLayout subTitle="예식일자 선택" checkLabel="디데이 표시">
          mantine 캘린더 쓸 예정
        </FormSectionLayout>
      </div>
    </Dropdown>
  );
};

export default WeddingDateForm;
