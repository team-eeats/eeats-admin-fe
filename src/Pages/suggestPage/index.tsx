import { useNavigate } from "react-router-dom";
import UserSuggestBox from "../../Components/UserSuggestBox";
import { Font } from "../../Styles/Font";
import * as S from "./style";
import { SuggestList } from "../../Apis/suggestions";
import { useEffect, useState } from "react";
import { SuggestListResponse } from "../../Apis/suggestions/type";

export const SuggestPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<SuggestListResponse | null>(null)

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await SuggestList()
        setData(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchSuggestions()
  }, [])

  return (
    <S.Container>
      <S.Text onClick={() => navigate("/suggest/hide")}>
        <Font kind="Button2" color="gray900" text="숨긴 건의 보기" />
      </S.Text>

      <S.BoxWrapper>
        {data?.suggestions.map((value, index) => (
            <UserSuggestBox key={index} value={value} />
        ))}
      </S.BoxWrapper>
    </S.Container>
  );
};
