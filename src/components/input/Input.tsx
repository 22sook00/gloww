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
  value: keyof typeof WEDDING_OBJ;
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
  ...props
}: InputProps) => {
  const {
    register,
    setValue,
    formState: { errors, dirtyFields },
  } = useFormContext();

  const getMaxLengthValue = (value: string) =>
    value.length > maxLength ? value.slice(0, maxLength) : value;
  const [changeType, setChangeType] = useState(isPw ? "password" : "text");
  const handleChangeType = () => {
    changeType === "text" ? setChangeType("password") : setChangeType("text");
  };
  return (
    <>
      <input
        className="w-full h-[43px] px-3 bg-input-gray border border-tint-gray rounded"
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
        type={changeType}
        {...props}
      />

      <>
        {errors[value] && (
          <p style={{ position: "absolute", right: "0" }}>
            {/*{errors[value].message }*/}
            error
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
    </>
  );
};

export default Input;
