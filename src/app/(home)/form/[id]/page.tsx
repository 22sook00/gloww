import React from "react";
import RecoilProvider from "@/components/provider/RecoilProvider";
import Preview from "@/components/form/MobilePreview";
import Step1 from "@/components/form/Step1";

const FormPage = () => {
  return (
    <RecoilProvider>
      <main className="default-layout min-h-screen mt-24">
        <h1>step 1 </h1>
        <div className="grid  grid-cols-[1fr,_467px] mb-36">
          <Step1 />
          <Preview />
        </div>
      </main>
    </RecoilProvider>
  );
};

export default FormPage;
