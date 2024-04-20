"use client";
import { WEDDING_FORM_INIT } from "@/data/weddingFormInit";
import React from "react";
import { useForm, FormProvider, useWatch, Controller } from "react-hook-form";

interface FormWrapperProps<T = { [key: string]: any } | any[]> {
  initParams?: T;
  children: React.ReactNode;
}

const FormWrapper = ({ initParams, children }: FormWrapperProps) => {
  const methods = useForm({
    mode: "onChange",
    defaultValues: initParams || { ...WEDDING_FORM_INIT },
  });

  const {
    setValue,
    control,
    getValues,
    watch,
    reset,
    setError,
    clearErrors,
    handleSubmit,
    formState: { isDirty },
  } = methods;

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default FormWrapper;
