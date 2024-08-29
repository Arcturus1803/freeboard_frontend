import { CREATE_BOARD } from "./BoardWrite.queries";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";
import RegisterPagePresenter from "./BoardWrite.presenter";

export default function RegisterPageContainer(props) {
  const [writer, setWriter] = useState("");
  const [writerError, setWriterError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [subject, setSubject] = useState("");
  const [subjectError, setSubjectError] = useState("");

  const [contents, setContents] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [func] = useMutation(CREATE_BOARD);

  const router = useRouter();

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
  };

  const onChangeSubject = (event) => {
    setSubject(event.target.value);
    if (event.target.value !== "") {
      setSubjectError("");
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
  };

  const onClickRegister = async (event) => {
    try {
      if (!writer) {
        setWriterError("작성자를 입력해주세요.");
      }

      if (!password) {
        setPasswordError("비밀번호를 입력해주세요.");
      }

      if (!subject) {
        setSubjectError("제목을 입력해주세요.");
      }

      if (!contents) {
        setContentsError("내용을 입력해주세요.");
      }

      if (writer && password && subject && contents) {
        alert("게시글 등록이 완료되었습니다.");
      }

      const result = await func({
        variables: {
          createBoardInput: {
            writer: writer,
            password: password,
            title: subject,
            contents: contents,
          },
        },
      });
      console.log(result);
      router.push(`/${result.data.createBoard._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <RegisterPagePresenter
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeSubject={onChangeSubject}
        onChangeContents={onChangeContents}
        onClickRegister={onClickRegister}
      />
    </>
  );
}
