import { useState } from "react";
import * as S from "./style";
import { Font } from "../../Styles/Font";
import Setting from "../../assets/img/Setting.svg";
import ModifyDeleteModal from "../ModifyDeleteModal";
import { Suggestions } from "../../Apis/suggestions/type";

/**
 *
 * @returns 급식 건의하기 학생 건의 컴포넌트
 */

const UserSuggestBox = ({ value }: { value: Suggestions }) => {
  const [selected, setSelected] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <S.Container key={value.id} onClick={() => setSelected(!selected)} selected={selected}>
      <S.TopWrap>
        <S.NicknameAndDateWrap>
          <Font text={value.accountId} kind="Body1" color="main200" />
          <Font text={value.createdAt} kind="Body1" color="gray300" />
        </S.NicknameAndDateWrap>
        <img
          src={Setting}
          alt="더보기"
          onClick={(e) => {
            e.stopPropagation();
            setOpenModal(!openModal);
          }}
        />
      </S.TopWrap>

      <Font text={value.title} kind="Heading3" />

      <Font
        text={value.content}
        kind="Body2"
        color="gray600"
      />

      {selected ? (
        <S.Input
          placeholder="건의에 답변을 작성하고 Enter키를 눌러주세요."
          readOnly
        />
      ) : (
        <></>
      )}
      {openModal && <ModifyDeleteModal id={value.id} />}
    </S.Container>
  );
};

export default UserSuggestBox;
