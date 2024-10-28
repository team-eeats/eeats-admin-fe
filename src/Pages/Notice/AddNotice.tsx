import { Font } from "../../Styles/Font"
import * as S from "./style"
import Button from "../../Components/Button"
import { useState } from "react"
import Input from "../../Components/Input/Input"

const AddNotice = () => {

  const [active, setActive] = useState<boolean>(false)

  return (
    <S.Container>
      <S.AddContainer>
        <S.TitleWrap>
          <Font text="새로운 공지 작성" kind="Heading1" color="gray900" />
          <Button
            text="공지 업로드"
            activate={active}
            onClick={() => { }}
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
            <S.TextArea placeholder="공지 내용을 입력해주세요." />
          </S.InputWrap>
        </S.InputContent>
      </S.AddContainer>
    </S.Container>
  )
}

export default AddNotice