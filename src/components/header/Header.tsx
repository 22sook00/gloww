import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full h-20 bg-slate-200 fixed top-0 z-10">
      <nav className="default-layout  flex-between">
        <h3>Header logo</h3>
        <ul className="flex-row">
          <li className="outline-btn">
            <Link href={"/form/1"}>자주 묻는 질문</Link>
          </li>
          <li className="outline-btn">
            <Link href={"/form/1"}>청첩장 보러가기</Link>
          </li>
          <li className="outline-btn">
            <Link href={"/form/1"}>청첩장 제작하기</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
