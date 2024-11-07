import { useEffect, useState } from "react";
import * as S from "./style";
import { Font } from "../../Styles/Font";
import MessageIcon from "../../assets/img/Message.svg";
import NewMark from "../../assets/img/NewMark.svg";
import Setting from "../../Assets/img/Setting.svg"
import ModifyDeleteModal from "../ModifyDeleteModal";
import { NoticeDetailResponse, Notices } from "../../Apis/notices/type";
import { passOneDay, timeForToday } from "../../utils/time";
import { NoticeDetail } from "../../Apis/notices";

const Notice = ({ value }: { value: Notices }) => {
  const id = value.id
  const [selected, setSelected] = useState(false);
  const [newMessage, setNewMessage] = useState(true);
  const [modalOpen, setModalOpen] = useState(false)

  const [detail, setDetail] = useState<NoticeDetailResponse | null>(null)

  useEffect(() => {
    const handleDetail = async () => {
      try {
        const response = await NoticeDetail(id)
        setDetail(response.data)
        setNewMessage(!passOneDay(detail?.createdAt || ''))
      } catch (error) {
        console.log(error)
      }
    }

    handleDetail()
  }, [])


  return (
    <>
      <S.Container key={id} onClick={() => setSelected(!selected)}>
        <S.AnnouncementWrap>
          <S.IconAndTitleWrap>
            <img src={MessageIcon} alt="메세지" />
            <S.InfoWrap>
              <S.TitleWrap>
                <Font text={detail?.title} kind="Heading4" />
                {newMessage ? <img src={NewMark} alt="최신" /> : <></>}
              </S.TitleWrap>
              <Font text={timeForToday(detail?.createdAt || '')} kind="label2" color="gray600" />
            </S.InfoWrap>
          </S.IconAndTitleWrap>
          <img src={Setting} alt="설정" onClick={() => setModalOpen(!modalOpen)} />
        </S.AnnouncementWrap>
        {selected ? (
          <S.Content>
            <Font text={detail?.content} kind="Body2" />
          </S.Content>
        ) : (
          <></>
        )}
      </S.Container>
      {modalOpen && <ModifyDeleteModal />}
    </>
  );
};

export default Notice;
