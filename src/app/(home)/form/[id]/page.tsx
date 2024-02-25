import React from "react";
import RecoilProvider from "@/components/provider/RecoilProvider";
import MobilePreview from "@/components/preview/MobilePreview";
import Form from "@/components/form/Form";
import FormWrapper from "@/components/form/FormWrapper";

const FormPage = () => {
  return (
    <RecoilProvider>
      <div className="bg-tint-gray">
        <main className="default-layout min-h-screen mt-[72px] ">
          <div className="grid lg:grid-cols-[406px,500px] justify-center py-[46px] gap-[18px]">
            <FormWrapper>
              <MobilePreview />
              <Form />
            </FormWrapper>
          </div>
        </main>
      </div>
    </RecoilProvider>
  );
};

export default FormPage;
