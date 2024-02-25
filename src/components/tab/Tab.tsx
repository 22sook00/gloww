"use client";
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

interface TabProps {
  value: string;
  text: string;
}

const Tab = ({ value, text }: TabProps) => {
  const { setValue, watch } = useFormContext();
  const handleSelect = () => {
    setValue(value, text);
  };

  return (
    <div
      onClick={handleSelect}
      className={`
      ${
        watch(value) === text
          ? " border-default-black text-default-black"
          : "border-tint-gray text-default-gray"
      }
      w-fit h-[35px] p-2 cursor-pointer border rounded-lg   `}
    >
      <p>{text}</p>
    </div>
  );
};

export default Tab;
