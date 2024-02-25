import React from "react";
import Button from "../button/Button";
import AccountForm from "./AccountForm";
import BoardForm from "./BoardForm";
import CoupleInfoForm from "./CoupleInfoForm";
import DesignForm from "./DesignForm";
import GallaryForm from "./GallaryForm";
import GreetingForm from "./GreetingForm";
import OutroForm from "./OutroForm";
import WeddingDateForm from "./WeddingDateForm";
import WeddingHallForm from "./WeddingHallForm";

const Form = () => {
  return (
    <div className="mt-2 flex-col-default justify-start">
      <DesignForm />
      <WeddingDateForm />
      <CoupleInfoForm />
      <CoupleInfoForm type="bride" />
      <GreetingForm />
      <WeddingHallForm />
      <GallaryForm />
      <AccountForm />
      <BoardForm />
      <OutroForm />
      <Button type="submit" size="lg">
        이대로 제출하기
      </Button>
    </div>
  );
};

export default Form;
