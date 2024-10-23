import UserSuggestBox from "../../Components/UserSuggestBox";
import { Font } from "../../Styles/Font";
import * as S from "./style";

export const HideSuggest = () => {
  return (
    <S.Container>
      <Font text="숨긴 건의" kind="Heading1" color="gray900" />
      <UserSuggestBox />
      <UserSuggestBox />
      <UserSuggestBox />
      <UserSuggestBox />
      <UserSuggestBox />
      <UserSuggestBox />
    </S.Container>
  );
};
