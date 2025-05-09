"use client";
import React, { useState } from "react";
import ArrowDown from "../assets/ArrowDown";
import ArrowUp from "../assets/ArrowUp";

interface DropdownProps {
  title: string;
  children: React.ReactNode;
}

const Dropdown = ({ title, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleOpenClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative w-full text-left shadow-xs rounded-md">
      <button
        type="button"
        className={`flex w-full justify-between rounded-md
      ${isOpen && "rounded-bl-none rounded-br-none"}
      p-4 bg-white ring-gray-300`}
        id="menu-button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={handleOpenClick}
      >
        <p className=" text-sm text-gray-900">{title}</p>
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </button>

      <div
        className={`overflow-hidden transition-max-height duration-700 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
        role="menu"
        aria-orientation="vertical"
      >
        <div className="w-full bg-white rounded-md px-4 rounded-tr-none rounded-tl-none shadow focus:outline-none">
          <div
            className="border-t-[0.75px] border-default-outline py-6"
            role="none"
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
