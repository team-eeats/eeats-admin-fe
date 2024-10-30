import { useState } from "react";
import * as S from "./style";
import { Font } from "../../Styles/Font";
import MessageIcon from "../../assets/img/Message.svg";
import NewMark from "../../assets/img/NewMark.svg";
import Setting from "../../Assets/img/Setting.svg"
import ModifyDeleteModal from "../ModifyDeleteModal";

const Notice = () => {
  const [selected, setSelected] = useState(false);
  const [newMessage, setNewMessage] = useState(true);
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <S.Container onClick={() => setSelected(!selected)}>
        <S.AnnouncementWrap>
          <S.IconAndTitleWrap>
            <img src={MessageIcon} alt="메세지" />
            <S.InfoWrap>
              <S.TitleWrap>
                <Font text="오늘 급식 변경" kind="Heading4" />
                {newMessage ? <img src={NewMark} alt="최신" /> : <></>}
              </S.TitleWrap>
              <Font text="1일전" kind="label2" color="gray600" />
            </S.InfoWrap>
          </S.IconAndTitleWrap>
          <img src={Setting} alt="설정" onClick={() => setModalOpen(!modalOpen)} />
        </S.AnnouncementWrap>
        {selected ? (
          <S.Content>
            <Font text="안녕하세요 블라블라" kind="Body2" />
          </S.Content>
        ) : (
          <></>
        )}
      </S.Container>
      { modalOpen && <ModifyDeleteModal />}
    </>
  );
};

export default Notice;
