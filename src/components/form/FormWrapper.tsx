"use client";
import React from "react";
import { useForm, FormProvider, useWatch, Controller } from "react-hook-form";

interface FormWrapperProps {
  children: React.ReactNode;
}

const FormWrapper = ({ children }: FormWrapperProps) => {
  const methods = useForm({
    mode: "onChange",
    defaultValues: {},
  });

  const {
    setValue,
    control,
    watch,
    reset,
    setError,
    clearErrors,
    formState: { isDirty },
  } = methods;

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default FormWrapper;
