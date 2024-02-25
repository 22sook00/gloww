import React from "react";
import Search from "../assets/Search";
import Dropdown from "../dropdown/Dropdown";

const WeddingHallForm = () => {
  return (
    <Dropdown title="예식장">
      <div>
        <p>예식장 주소</p>
        <Search />
        <p>예식장 명</p>
        <p>예식장 상세 정보(층, 홀 등)</p>
        <p>예식장 오시는 길</p>
      </div>
    </Dropdown>
  );
};

export default WeddingHallForm;
