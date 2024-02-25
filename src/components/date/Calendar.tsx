"use client";
import React, { useState } from "react";
import { DatePickerInput } from "@mantine/dates";
import "dayjs/locale/ko";
const Calendar = () => {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <DatePickerInput
      size="md"
      minDate={new Date()}
      placeholder="예식일자를 선택해 주세요."
      value={value}
      onChange={setValue}
    />
  );
};

export default Calendar;
