import * as S from "./style"
import { Font } from "../../Styles/Font"
import Notice from "../../Components/Notice"
import Write from "../../Assets/img/SVG/Write.svg"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { NoticeList } from "../../Apis/notices"
import { NoticeListResponse } from "../../Apis/notices/type"

const NoticePage = () => {
  const navigation = useNavigate()
  const [data, setData] = useState<NoticeListResponse | null>(null)

  useEffect(() => {
    const handleNotice = async() => {
      try {
        const response = await NoticeList()
        setData(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    handleNotice()
  }, [])

  return (
    <S.Container>
      <S.Content>
        <S.TitleWrap>
          <Font kind="Heading2" text="공지사항" />
          <S.Button onClick={() => navigation("/addNotice")}>
            <Font kind="Button2" text="공지 작성하기" color="white" />
            <img src={Write} alt="Write icon" />
          </S.Button>
        </S.TitleWrap>
        <S.NoticeWrap>
          {data?.notices.map((value) => (
            <Notice key={value.id} value={value} />
          ))}
        </S.NoticeWrap>
      </S.Content>
    </S.Container>
  )
}

export default NoticePage
