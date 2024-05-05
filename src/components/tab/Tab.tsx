"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useFormContext } from "react-hook-form";

interface TabProps {
  value: string;
  text: string;
  font?: string;
  code?: string;
}

const Tab = ({ value, text, font = "pretendard", code }: TabProps) => {
  const { setValue, watch } = useFormContext();
  const handleSelect = () => {
    setValue(value, code);
  };

  const selectFont = useMemo(() => {
    switch (font) {
      case "bookk":
        return "font-bookk";
      case "gowun":
        return "font-gowun";
      case "nanum":
        return "font-nanum";
      default:
        return "font-pretendard";
    }
  }, [font]);

  useEffect(() => {
    if (value) {
      const initValuse = watch(value);
      setValue(value, initValuse);
    }
  }, [watch, value]);

  return (
    <div
      onClick={handleSelect}
      className={`
      ${
        watch(value) === code
          ? " border-default-black text-default-black"
          : "border-tint-gray text-default-gray"
      }
      w-fit h-[35px] p-2 cursor-pointer border rounded-lg`}
    >
      <p className={`${selectFont} leading-[16px]`}>{text}</p>
    </div>
  );
};

export default Tab;
