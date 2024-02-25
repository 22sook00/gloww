import React from "react";
import Dropdown from "../dropdown/Dropdown";

const BoardForm = () => {
  return (
    <Dropdown title="방명록">
      <div>
        <p>방명록 비밀번호(4~12자)</p>
        <p>방명록 레이아웃</p>
      </div>
    </Dropdown>
  );
};

export default BoardForm;
