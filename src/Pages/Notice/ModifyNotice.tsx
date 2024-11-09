import { Font } from "../../Styles/Font";
import * as S from "./style";
import Button from "../../Components/Button";
import { useState, useEffect } from "react";
import Input from "../../Components/Input/Input";
import { useLocation, useNavigate } from "react-router-dom";
import useInputStore from "../../store/useInputStore";
import { ModifyNotice, NoticeDetail } from "../../Apis/notices/index";

const AddNotice = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { inputs, setInput } = useInputStore();

  const [content, setContent] = useState<string>('');
  const [active, setActive] = useState<boolean>(false);

  const noticeId = state?.noticeId || '';

  const { mutate: modifyNotice } = ModifyNotice(noticeId);

  useEffect(() => {
    const handleDetail = async () => {
      try {
        const response = await NoticeDetail(noticeId);
        setInput("title", response.data.title);
        setContent(response.data.content);
      } catch (error) {
        console.log(error);
      }
    };
    if (noticeId) handleDetail();
  }, [noticeId, setInput]);

  useEffect(() => {
    setActive(!!inputs["title"] && !!content);
  }, [inputs, content]);

  const handleUpload = () => {
    const noticeData = {
      title: inputs["title"],
      content,
    };
    modifyNotice(noticeData, {
      onSuccess: () => {
        navigate("/notice");
      },
      onError: (error) => {
        console.error(error);
      }
    });
  };

  return (
    <S.Container>
      <S.AddContainer>
        <S.TitleWrap>
          <Font text="공지 수정" kind="Heading1" color="gray900" />
          <Button
            text="수정 완료"
            activate={active}
            onClick={handleUpload}
          />
        </S.TitleWrap>
        <S.InputContent>
          <S.InputWrap>
            <S.TextWrap>
              <Font text="공지 제목" kind="label1" />
            </S.TextWrap>
            <Input
              id="title"
              type="text"
              placeholder="공지 제목을 입력해주세요."
            />
          </S.InputWrap>
          <S.InputWrap>
            <S.TextWrap>
              <Font text="공지 내용" kind="label1" />
            </S.TextWrap>
            <S.TextArea
              placeholder="공지 내용을 입력해주세요."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </S.InputWrap>
        </S.InputContent>
      </S.AddContainer>
    </S.Container>
  );
};

export default AddNotice;
