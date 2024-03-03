"use client";
import { WEDDING_FORM_INIT } from "@/data/weddingFormInit";
import React from "react";
import { useForm, FormProvider, useWatch, Controller } from "react-hook-form";

interface FormWrapperProps {
  children: React.ReactNode;
}

const FormWrapper = ({ children }: FormWrapperProps) => {
  const methods = useForm({
    mode: "onChange",
    defaultValues: { ...WEDDING_FORM_INIT },
  });

  const {
    setValue,
    control,
    getValues,
    watch,
    reset,
    setError,
    clearErrors,
    formState: { isDirty },
  } = methods;

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default FormWrapper;
