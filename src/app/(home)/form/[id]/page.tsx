import React from "react";
import MobilePreview from "@/components/preview/MobilePreview";
import Form from "@/components/form/Form";
import FormWrapper from "@/components/form/FormWrapper";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

const FormPage = () => {
  return (
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
  );
};

export default FormPage;
