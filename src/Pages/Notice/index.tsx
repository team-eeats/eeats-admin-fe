import * as S from "./style"
import { Font } from "../../Styles/Font"
import Notice from "../../Components/Notice"
import Write from "../../Assets/img/SVG/Write.svg"

const NoticePage = () => {
  return (
    <S.Container>
      <S.Content>
        <S.TitleWrap>
          <Font kind="Heading2" text="공지사항" />
          <S.Button>
            <Font kind="Button2" text="공지 작성하기" color="white" />
            <img src={Write} />
          </S.Button>
        </S.TitleWrap>
        <S.NoticeWrap>
          <Notice />
          <Notice />
          <Notice />
          <Notice />
        </S.NoticeWrap>
      </S.Content>
    </S.Container>
  )
}

export default NoticePage