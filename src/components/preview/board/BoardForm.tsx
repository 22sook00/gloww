import React, { FC, SetStateAction, useMemo } from "react";
import FormWrapper from "@/components/form/FormWrapper";
import Input from "@/components/input/Input";
import FormSectionLayout from "@/components/layout/FormSectionLayout";
import { useFormContext, useWatch } from "react-hook-form";
import Button from "@/components/button/Button";
import { v4 as uuidv4 } from "uuid";
import { BoardFormProps } from "@/interface/boardForm";

interface BoardFormCompProps {
  setIsOpenBoardForm: React.Dispatch<React.SetStateAction<boolean>>;
  getAllBoardList: any;
  setBoardList: React.Dispatch<SetStateAction<BoardFormProps[]>>;
}
const BoardForm: FC<BoardFormCompProps> = ({
  setIsOpenBoardForm,
  getAllBoardList,
  setBoardList,
}) => {
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useFormContext();

  const [writer, password, message] = useWatch({
    control,
    name: ["writer", "password", "message"],
  });

  const isDisableSubmit = useMemo(() => {
    if (!writer) return true;
    if (!password) return true;
    if (!message) return true;
    return false;
  }, [writer, password, message]);

  const handleSubmitMessage = async (data: any) => {
    const id = uuidv4();
    const response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, ...data }),
    });

    if (response.ok) {
      console.log("Post created successfully");
      // 폼 리셋 또는 성공 처리 로직
      setIsOpenBoardForm(false);
      const data = async () => {
        const { data } = await getAllBoardList();
        setBoardList(data);
      };
      data();
    } else {
      console.error("Failed to create post");
      //setIsOpenBoardForm(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(handleSubmitMessage)}>
      <FormSectionLayout>
        <Input value={"writer"} label={"작성자 이름"} />
        <Input value={"password"} isPw label={"비밀번호"} />
        <Input value={"message"} isTextarea label={"축하메시지"} />

        {/*TODO isLoading 추가하기*/}
        <Button size="full" type="submit" disabled={isDisableSubmit}>
          축하메시지 남기기
        </Button>
      </FormSectionLayout>
    </form>
  );
};

export default BoardForm;
