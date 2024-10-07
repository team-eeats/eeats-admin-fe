import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Font } from '../../Styles/Font';
import * as S from './style';
import DeleteModal from '../DeleteModal';

const ModifyDeleteModal = () => {
  const navigate = useNavigate();
  const [deleteSuggest, setDeleteSuggest] = useState<boolean>(false);

  return (
    <>
      {deleteSuggest ? (<DeleteModal />) : (
        <S.Container>
          <S.Modal>
            <S.TextWrap onClick={() => navigate("/suggestModify")}>
              <Font kind="Button1" text="수정하기" />
            </S.TextWrap>
            <S.Line />
            <S.TextWrap onClick={() => setDeleteSuggest(true)}>
              <Font kind="Button1" text="삭제하기" color="main500" />
            </S.TextWrap>
          </S.Modal>
        </S.Container>
      )}
    </>
  );
};

export default ModifyDeleteModal;
