import React from "react";
import Dropdown from "../dropdown/Dropdown";

const AccountForm = () => {
  return (
    <Dropdown title={"마음 전하실 곳"}>
      <div>
        <p>신랑 계좌번호</p>
        <p>신부 계좌번호</p>
      </div>
    </Dropdown>
  );
};

export default AccountForm;
