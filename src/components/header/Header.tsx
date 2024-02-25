import Link from "next/link";
import React from "react";
import Button from "../button/Button";

const Header = () => {
  return (
    <header className="w-full h-[72px] fixed top-0 z-10 backdrop-blur">
      <nav className="default-layout  flex-between">
        <h3>Header logo</h3>
        <div className="flex-row gap-4">
          <Button theme="secondary">
            <Link href={"/form/1"}>새로 제작하기</Link>
          </Button>
          <Button>
            <Link href={"/form/1"}>중간 저장하기</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
