import React from "react";
import Checkbox from "../checkbox/Checkbox";
interface FormSectionLayout {
  subTitle?: string;
  checkLabel?: string;
  children: React.ReactNode;
}

const FormSectionLayout = ({
  subTitle,
  checkLabel = undefined,
  children,
}: FormSectionLayout) => {
  return (
    <section className="form-section-layout">
      <div className="flex-between ">
        <p className="text-light-black font-semibold">{subTitle}</p>
        {checkLabel && <Checkbox label={checkLabel} />}
      </div>
      {children}
    </section>
  );
};

export default FormSectionLayout;
