"use client";
import React, { useState } from "react";
import Check from "@/components/assets/Check";

interface CheckboxProps {
  label?: string;
}
const Checkbox = ({ label }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);
  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="flex items-center space-x-2">
      {label && <span className="text-sm text-light-black">{label}</span>}
      <div
        className={`w-6 h-6 flex justify-center items-center rounded-md cursor-pointer ${
          checked ? "bg-black" : "border border-check-gray bg-white"
        }`}
        onClick={handleCheckboxChange}
      >
        {checked && <Check />}
      </div>
    </div>
  );
};

export default Checkbox;
