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
import useModal from "../../Hooks/useModal"

const Notice = ({ value }: { value: Notices }) => {
  const id = value.id;
  const [selected, setSelected] = useState(false);
  const [newMessage, setNewMessage] = useState(true);
  const [detail, setDetail] = useState<NoticeDetailResponse | null>(null);

  const { Modal, open, close, isOpen } = useModal({ useBlur: true });

  useEffect(() => {
    const handleDetail = async () => {
      try {
        const response = await NoticeDetail(id);
        setDetail(response.data);
        const isNew = passOneDay(response.data.createdAt);
        setNewMessage(!isNew);
      } catch (error) {
        console.log(error);
      }
    };

    handleDetail();
  }, [id]);

  return (
    <>
      <S.Container key={id} onClick={() => setSelected(!selected)}>
        <S.AnnouncementWrap>
          <S.IconAndTitleWrap>
            <img src={MessageIcon} alt="메세지" />
            <S.InfoWrap>
              <S.TitleWrap>
                <Font text={detail?.title} kind="Heading4" />
                {newMessage && <img src={NewMark} alt="최신" />}
              </S.TitleWrap>
              <Font text={timeForToday(detail?.createdAt || '')} kind="label2" color="gray600" />
            </S.InfoWrap>
          </S.IconAndTitleWrap>
          <img src={Setting} alt="설정" onClick={open} />
        </S.AnnouncementWrap>
        {selected && (
          <S.Content>
            <Font text={detail?.content} kind="Body2" />
          </S.Content>
        )}
      </S.Container>
      
      {isOpen && (
        <Modal>
          <ModifyDeleteModal id={id} close={close} />
        </Modal>
      )}
    </>
  );
};

export default Notice;
