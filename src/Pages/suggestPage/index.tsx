import UserSuggestBox from "../../Components/UserSuggestBox";
import { Font } from "../../Styles/Font";
import * as S from "./style";

export const SuggestPage = () => {
  return (
    <S.Container>
      <S.Text>
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
