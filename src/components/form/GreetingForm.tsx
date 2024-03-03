"use client";
import { GREETING_ARR } from "@/data/staticData";
import React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import Dropdown from "../dropdown/Dropdown";
import FormSectionLayout from "../layout/FormSectionLayout";
import Tab from "../tab/Tab";
import TextEditor from "../textEditor/TextEditor";

const GreetingForm = () => {
  const {
    control,
    setValue,
    formState: { errors, dirtyFields },
  } = useFormContext();

  const [greeting] = useWatch({
    control,
    name: ["greeting"],
  });

  return (
    <Dropdown title="인삿말">
      <div className="form-section-layout gap-6">
        <FormSectionLayout subTitle="인삿말 입력">
          <TextEditor />
        </FormSectionLayout>
        <FormSectionLayout subTitle="인삿말 예시 보기">
          <div className="flex-row">
            {GREETING_ARR.map((greeting) => {
              return (
                <Tab
                  value={"greeting.type"}
                  key={greeting.greetingId}
                  text={greeting.name}
                  code={greeting.code}
                />
              );
            })}
          </div>
        </FormSectionLayout>
      </div>
    </Dropdown>
  );
};

export default GreetingForm;
