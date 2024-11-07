import { Font } from "../../Styles/Font"
import * as S from "./style"
import Button from "../../Components/Button"
import { useEffect, useState } from "react"
import Input from "../../Components/Input/Input"
import useInputStore from "../../store/useInputStore"
import { CreateNotice } from "../../Apis/notices"
import { useNavigate } from "react-router-dom"

const AddNotice = () => {
  const navigate = useNavigate()
  const { inputs } = useInputStore()
  const [content, setContent] = useState<string>('')
  const [active, setActive] = useState<boolean>(false)

  const handleUpload = async () => {
    try {
      const noticeData = {
        title: inputs["title"],
        content,
      };
      await CreateNotice(noticeData);
      navigate("/notice")
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setActive(!!inputs["title"] && !!content)
  }, [inputs, content]);


  return (
    <S.Container>
      <S.AddContainer>
        <S.TitleWrap>
          <Font text="새로운 공지 작성" kind="Heading1" color="gray900" />
          <Button
            text="공지 업로드"
            activate={active}
            onClick={handleUpload}
          />
        </S.TitleWrap>
        <S.InputContent>
          <S.InputWrap>
            <S.TextWrap>
              <Font text="*" kind="label1" color="main400" />
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
              value={content}
              placeholder="공지 내용을 입력해주세요."
              onChange={(e) => setContent(e.target.value)}
            />
          </S.InputWrap>
        </S.InputContent>
      </S.AddContainer>
    </S.Container>
  )
}

export default AddNotice