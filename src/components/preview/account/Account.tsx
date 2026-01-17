import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { weddingDataState } from "@/utils/atom";
import Dropdown from "@/components/dropdown/Dropdown";
import Dialog from "@/components/dialog/Dialog";
import AccountContent from "./AccountContent";

const Account = () => {
  const { account } = useRecoilValue(weddingDataState);
  const [isOpenCopyAlert, setIsOpenCopyAlert] = useState(false);
  const handleCopyAlert = () => {
    setIsOpenCopyAlert(true);
    setTimeout(() => {
      setIsOpenCopyAlert(false);
    }, 1500);
  };

  return (
    <section className="bg-light-beige py-[50px] px-[15px] flex-col-default gap-3 items-center shadow-sm">
      <div className="flex flex-col justify-center items-center mb-4">
        <p className="leading-7 font-medium text-default-text">
          마음 전하실 곳
        </p>
      </div>

      <Dropdown title={"신랑측"}>
        <AccountContent
          accountArr={account.groom}
          handleCopyAlert={handleCopyAlert}
        />
      </Dropdown>
      <Dropdown title={"신부측"}>
        <AccountContent
          accountArr={account.bride}
          handleCopyAlert={handleCopyAlert}
        />
      </Dropdown>

      {isOpenCopyAlert && (
        <Dialog handleClosePopup={() => setIsOpenCopyAlert(false)}>
          <div className="flex-col-default items-center">
            <p>복사가 완료되었습니다.</p>
          </div>
        </Dialog>
      )}
    </section>
  );
};

export default Account;
