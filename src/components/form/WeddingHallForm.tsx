"use client";
import React from "react";
import Search from "../assets/Search";
import Dropdown from "../dropdown/Dropdown";
import DaumPostcode from "react-daum-postcode";
import FormSectionLayout from "../layout/FormSectionLayout";
import Input from "../input/Input";
import { TRANSPORTATION_ARR } from "@/data/staticData";
import Tab from "../tab/Tab";
import Button from "../button/Button";

const WeddingHallForm = () => {
  const handleClickPostCode = (data: any) => {
    console.log("data", data);
  };
  return (
    <Dropdown title="예식장">
      <div className="form-section-layout gap-6">
        <FormSectionLayout subTitle="예식장 주소" checkLabel="지도 이미지 표시">
          {/*<DaumPostcode autoClose onComplete={handleClickPostCode} />*/}
          <Search />
        </FormSectionLayout>
        <FormSectionLayout subTitle="예식장 명">
          <Input value={"bride"} />
        </FormSectionLayout>
        <FormSectionLayout subTitle="예식장 상세 정보(층, 홀 등)">
          <Input value={"bride"} />
        </FormSectionLayout>
        <FormSectionLayout subTitle="예식장 오시는 길">
          <div className="flex-row">
            {TRANSPORTATION_ARR.map((transportation) => {
              return (
                <Tab
                  value={"transportation-1"}
                  key={transportation.transportationId}
                  text={transportation.name}
                />
              );
            })}
          </div>
          <Input value={"bride"} />
          <div className="flex-row">
            {TRANSPORTATION_ARR.map((transportation) => {
              return (
                <Tab
                  value={"transportation-2"}
                  key={transportation.transportationId}
                  text={transportation.name}
                />
              );
            })}
          </div>
          <Input value={"groom"} />
        </FormSectionLayout>

        <Button
          theme="secondary"
          size="full"
          onClick={() => console.log("추가.")}
        >
          오시는 길 추가
        </Button>
      </div>
    </Dropdown>
  );
};

export default WeddingHallForm;
