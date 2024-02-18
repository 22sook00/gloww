import RecoilProvider from "@/components/provider/RecoilProvider";
import React from "react";

const FormPage = () => {
  return (
    <main className="default-layout min-h-screen mt-32">
      <RecoilProvider>
        <h1>FormPage</h1>
      </RecoilProvider>
    </main>
  );
};

export default FormPage;
