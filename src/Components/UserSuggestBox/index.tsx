import { useState } from "react";
import * as S from "./style";
import { Font } from "../../Styles/Font";
import { Suggestions } from "../../Apis/suggestions/type";
import { CreateComment } from "../../Apis/comments";
import { useQueryClient } from "react-query";

/**
 *
 * @returns 급식 건의하기 학생 건의 컴포넌트
 */

const UserSuggestBox = ({ value }: { value: Suggestions }) => {

  const queryClient = useQueryClient()
  const id = value.id;
  const [selected, setSelected] = useState(false);
  const [comment, setComment] = useState(value.comment?.content || "");

  const { mutate: create } = CreateComment(id);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (e.key === "Enter" && comment.trim()) {
      create({ content: comment }, {
        onSuccess: () => {
          queryClient.invalidateQueries("suggestions");
          setComment("");
          window.location.reload()
        }
      });
    }
  };

  return (
    <S.Container onClick={() => setSelected(!selected)} selected={selected}>
      <S.TopWrap>
        <S.NicknameAndDateWrap>
          <Font text={value.accountId} kind="Body1" color="main200" />
          <Font text={value.createdAt} kind="Body1" color="gray300" />
        </S.NicknameAndDateWrap>
      </S.TopWrap>

      <Font text={value.title} kind="Heading3" />
      <Font text={value.content} kind="Body2" color="gray600" />

      {selected && (
        <S.Input
          value={comment}
          placeholder="건의에 답변을 작성하고 Enter키를 눌러주세요."
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          onClick={(e) => e.stopPropagation()}
        />
      )}
    </S.Container>
  );
};

export default UserSuggestBox;
