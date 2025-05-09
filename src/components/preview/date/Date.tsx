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

  return (
    <section className=" py-[56px] flex-col-default items-center shadow">
      <div className="flex-col-default items-center">
        <p className="sub-title">THE WEDDING DAY</p>
        <div className="flex flex-col justify-center items-center mb-4">
          <p className="leading-7">{datePart}</p>
          <p className="leading-7">{timePart}</p>
        </div>
        <DatePicker
          firstDayOfWeek={0}
          size="md"
          locale="ko"
          defaultDate={new window.Date(2025, 5, 14)}
          defaultValue={new window.Date(2025, 5, 14)}
          value={new window.Date(2025, 5, 14)}
        />
      </div>
    </section>
  );
};

export default Date;
