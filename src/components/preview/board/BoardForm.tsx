import React, { FC, useMemo } from "react";
import FormWrapper from "@/components/form/FormWrapper";
import Input from "@/components/input/Input";
import FormSectionLayout from "@/components/layout/FormSectionLayout";
import { useFormContext, useWatch } from "react-hook-form";
import Button from "@/components/button/Button";

interface BoardFormProps {
  setIsOpenBoardForm: React.Dispatch<React.SetStateAction<boolean>>;
}
const BoardForm: FC<BoardFormProps> = ({ setIsOpenBoardForm }) => {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useFormContext();

  const [name, password, message] = useWatch({
    control,
    name: ["name", "password", "message"],
  });

  const isDisableSubmit = useMemo(() => {
    if (!name) return true;
    if (!password) return true;
    if (!message) return true;
    return false;
  }, [name, password, message]);

  const handleSubmitMessage = (data: any) => {
    console.log("FORM DATA", data);
    setIsOpenBoardForm(false);
  };
  return (
    <form onSubmit={handleSubmit(handleSubmitMessage)}>
      <FormSectionLayout>
        <Input value={"name"} label={"작성자 이름"} />
        <Input value={"password"} isPw label={"비밀번호"} />
        <Input value={"message"} isTextarea label={"축하메세지"} />

        {/*TODO isLoading 추가하기*/}
        <Button size="full" type="submit" disabled={isDisableSubmit}>
          축하메세지 남기기
        </Button>
      </FormSectionLayout>
    </form>
  );
};

export default BoardForm;
