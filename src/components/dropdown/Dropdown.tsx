"use client";
import React, { useState } from "react";
import ArrowDown from "../assets/ArrowDown";
import ArrowUp from "../assets/ArrowUp";

interface DropdownProps {
  title: string;
  children: React.ReactNode;
}

const Dropdown = ({ title, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative w-full text-left border rounded-md">
      <button
        type="button"
        className={`flex w-full justify-between rounded-md
        ${isOpen && "rounded-bl-none rounded-br-none "}
        p-4 bg-white ring-gray-300 `}
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        onClick={handleOpenClick}
      >
        <p className="leading-[18px] font-semibold text-sm text-gray-900 ">
          {title}
        </p>
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </button>

      {isOpen && (
        <div
          className="w-ull bg-white 
        rounded-[16px] px-4 rounded-tr-none rounded-tl-none  shadow-lg  focus:outline-none"
          role="menu"
          aria-orientation="vertical"
        >
          <div
            className="
         border-t-[0.75px] border-default-outline py-6"
            role="none"
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
