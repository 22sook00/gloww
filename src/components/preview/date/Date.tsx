import React, { useState } from "react";
import { DatePicker } from "@mantine/dates";
import { useRecoilValue } from "recoil";
import { weddingDataState } from "@/utils/atom";
import "dayjs/locale/ko";
import { formatDate } from "@/utils/format";

const Date = () => {
  const { date } = useRecoilValue(weddingDataState);
  const dateTime = date.date;
  const { datePart, timePart } = formatDate(dateTime);

  const [value, setValue] = useState();

  return (
    <section className=" py-[50px] flex-col-default items-center shadow-md">
      <p className="sub-title">THE WEDDING DAY</p>
      <div className="flex flex-col justify-center items-center mb-4">
        <p className="leading-7">{datePart}</p>
        <p className="leading-7">{timePart}</p>
      </div>
      <DatePicker
        firstDayOfWeek={0}
        size="md"
        locale="ko"
        defaultDate={new window.Date(2024, 8, 7)}
        defaultValue={new window.Date(2024, 8, 7)}
        value={new window.Date(2024, 8, 7)}
      />
    </section>
  );
};

export default Date;