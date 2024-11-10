import { useState } from "react";
import { Font } from "../../Styles/Font";
import * as S from "./style";
import DeleteModal from "../DeleteModal";
import { useNavigate } from "react-router-dom";
import useModal from "../../Hooks/useModal";

const ModifyDeleteModal = ({ id, close }: { id: string; close: () => void }) => {
  const navigate = useNavigate();
  const [deleteSuggest, setDeleteSuggest] = useState<boolean>(false);

  const { Modal: CustomModal, open, close: modalClose, isOpen } = useModal({ useBlur: true });

  const handleModify = () => {
    navigate("/modifyNotice", { state: { noticeId: id } });
  };

  const handleDelete = () => {
    setDeleteSuggest(true);
  };

  return (
    <>
      {deleteSuggest ? (
        <DeleteModal id={id} close={close}/>
      ) : (
        <S.Container>
          <S.Modal>
            <S.TextWrap onClick={handleModify}>
              <Font kind="Button1" text="수정하기" />
            </S.TextWrap>
            <S.Line />
            <S.TextWrap onClick={handleDelete}>
              <Font kind="Button1" text="삭제하기" color="main500" />
            </S.TextWrap>
          </S.Modal>
        </S.Container>
      )}

      {isOpen && (
        <CustomModal>
          <DeleteModal id={id} close={modalClose} />
        </CustomModal>
      )}
    </>
  );
};

export default ModifyDeleteModal;
