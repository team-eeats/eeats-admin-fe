import { useNavigate } from "react-router-dom";
import UserSuggestBox from "../../Components/UserSuggestBox";
import { Font } from "../../Styles/Font";
import * as S from "./style";

export const SuggestPage = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Text onClick={() => navigate("/suggest/hide")}>
        <Font kind="Button2" color="gray900" text="숨긴 건의 보기" />
      </S.Text>
      <S.BoxWrapper>
        <UserSuggestBox />
        <UserSuggestBox />
        <UserSuggestBox />
        <UserSuggestBox />
        <UserSuggestBox />
        <UserSuggestBox />
      </S.BoxWrapper>
    </S.Container>
  );
};
