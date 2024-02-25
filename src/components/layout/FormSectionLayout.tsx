import React from "react";

interface FormSectionLayout {
  subTitle?: string;
  children: React.ReactNode;
}

const FormSectionLayout = ({ subTitle, children }: FormSectionLayout) => {
  return (
    <section className="form-section-layout">
      <p className="text-light-black font-semibold">{subTitle}</p>
      {children}
    </section>
  );
};

export default FormSectionLayout;
