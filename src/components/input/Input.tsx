import {
  FORM_ERROR,
  FORM_PLACEHOLDER,
  FORM_VALIDATION,
} from "@/data/staticData";
import { WEDDING_OBJ } from "@/data/weddingObj";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps {
  //TODO type 고쳐야함.
  //value: keyof typeof WEDDING_OBJ;
  value: any;
  onChange?: any;
  onBlur?: any;
  validateFunc?: any;
  placeholder?: string;
  dirtyMsg?: string;
  isReadOnly?: boolean;
  isRequired?: boolean;
  changeEvent?: any;
  blurMsg?: string;
  validatePattern?: any;
  validationMsg?: any;
  requiredMsg?: string;
  maxLength?: number;
  errFocus?: any;
  isPw?: boolean;
  isTextarea?: boolean;
  label?: string;
}

const Input = ({
  value,
  onChange,
  onBlur,
  validateFunc,
  placeholder,
  dirtyMsg,
  isReadOnly = false,
  isRequired = false,
  changeEvent,
  blurMsg,
  validatePattern,
  validationMsg,
  requiredMsg,
  maxLength = 100,
  errFocus,
  isPw = false,
  isTextarea = false,
  label,
  ...props
}: InputProps) => {
  const {
    register,
    setValue,
    formState: { errors, dirtyFields },
  } = useFormContext<{ [x: string]: string }>();

  const getMaxLengthValue = (value: string) =>
    value.length > maxLength ? value.slice(0, maxLength) : value;

  return (
    <div className="relative w-full">
      {label && <p className="text-sm mb-1">{label}</p>}

      {isTextarea ? (
        <textarea
          className="focus-ring w-full h-[120px] p-3 border border-tint-gray rounded resize-none placeholder:text-sm"
          readOnly={isReadOnly}
          placeholder={placeholder || FORM_PLACEHOLDER[value]}
          {...register(value, {
            required: {
              value: isRequired,
              message: requiredMsg ? requiredMsg : FORM_ERROR[value]?.empty,
            },
            pattern: {
              value: validatePattern ? validatePattern : FORM_VALIDATION[value],
              message: validationMsg
                ? validationMsg
                : FORM_ERROR[value]?.validation, // 에러 메세지
            },
            onChange: (e) => {
              if (maxLength)
                setValue(value, getMaxLengthValue(e.target.value), {
                  shouldValidate: true,
                  shouldDirty: true,
                });
              if (changeEvent) changeEvent(e);
            },
            onBlur: onBlur,
            validate: validateFunc && {
              check: validateFunc,
            },
          })}
          maxLength={maxLength}
          {...props}
        />
      ) : (
        <input
          className="focus-ring placeholder:text-sm
          w-full h-[43px] px-3  border border-tint-gray rounded"
          readOnly={isReadOnly}
          placeholder={placeholder || FORM_PLACEHOLDER[value]}
          {...register(value, {
            required: {
              value: isRequired,
              message: requiredMsg ? requiredMsg : FORM_ERROR[value]?.empty,
            },
            pattern: {
              value: validatePattern ? validatePattern : FORM_VALIDATION[value],
              message: validationMsg
                ? validationMsg
                : FORM_ERROR[value]?.validation, // 에러 메세지
            },
            onChange: (e) => {
              if (maxLength)
                setValue(value, getMaxLengthValue(e.target.value), {
                  shouldValidate: true,
                  shouldDirty: true,
                });
              if (changeEvent) changeEvent(e);
            },
            onBlur: onBlur,
            validate: validateFunc && {
              check: validateFunc,
            },
          })}
          maxLength={maxLength}
          type={isPw ? "password" : "text"}
          {...props}
        />
      )}

      <>
        {errors[value] && (
          <p
            className="absolute right-0 top-[2px] text-[10px] leading-4 text-error-primary"
            style={{ position: "absolute", right: "0" }}
          >
            {errors[value]?.message || "올바른 텍스트를 입력하세요."}
          </p>
        )}
        {!errors[value] && dirtyFields[value] && (
          <p
            className="text-xs"
            style={{
              position: "absolute",
              right: "0",
              fontSize: "11px",
              lineHeight: "11px",
            }}
          >
            {dirtyMsg}
          </p>
        )}
        {blurMsg && (
          <p
            className="text-xs"
            style={{
              position: "absolute",
              right: "0",
              fontSize: "11px",
              lineHeight: "11px",
            }}
          >
            {blurMsg}
          </p>
        )}
      </>
    </div>
  );
};

export default Input;
