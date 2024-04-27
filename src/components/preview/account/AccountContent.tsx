import React, { Fragment, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Button from "@/components/button/Button";
import { Account } from "@/interface/wedding";

interface AccountContentProps {
  handleCopyAlert: () => void;
  accountArr: Account[];
}

const AccountContent = ({
  accountArr,
  handleCopyAlert,
}: AccountContentProps) => {
  return (
    <div className="form-section-layout font-pretendard text-sm">
      {accountArr.map((list, idx) => {
        return (
          <Fragment key={`groom-account-${idx}`}>
            <div className="flex-between items-start">
              <div>
                <p>
                  {list.bankName} | {list.accountNumber}
                </p>
                <p>(예금주 : {list?.holder || "허용준"})</p>
              </div>
              <div>
                <CopyToClipboard
                  text={`${list.bankName} ${list.accountNumber}`}
                  onCopy={handleCopyAlert}
                >
                  <Button size="xs" theme="outline">
                    복사하기
                  </Button>
                </CopyToClipboard>
                {list.kakaopayLink && (
                  <div
                    className={
                      "w-15 h-8 flex justify-center items-center bg-[#fbdf1d] rounded-md mt-2"
                    }
                  >
                    <Link href={list.kakaopayLink} target={"_blank"}>
                      <Image
                        src="/imgs/kakaopay.png"
                        alt="kakao-pay"
                        width={32}
                        height={32}
                      />
                    </Link>
                  </div>
                )}
              </div>
            </div>
            {idx + 1 !== accountArr.length && (
              <div className="border-b w-full " />
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

export default AccountContent;
