import { useEffect, useState } from "react";
import Button from "../../Components/Button";
import { Font } from "../../Styles/Font";
import * as S from "./style";
import Input from "../../Components/Input/Input";
import addButton from "../../assets/img/SVG/addButton.svg";
import useInputStore from "../../store/useInputStore";
import VoteModal from "../../Components/voteModal";

const MakingVotePage = () => {
  const [isDone, setIsDone] = useState<boolean>(false);
  const { inputs } = useInputStore();

  useEffect(() => {
    console.log(inputs);
    if (inputs["voteName"] && inputs["voteExplain"]) setIsDone(true);
    else setIsDone(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputs["voteName"], inputs["voteExplain"]]);

  const addVote = () => {};

  return (
    <S.Container>
      <S.FlexBox>
        <Font text="새로운 투표 만들기" kind="Heading1" color="gray900" />
        <Button text="투표 업로드" activate={isDone} onClick={() => {}} />
      </S.FlexBox>
      <S.InputBox>
        <S.TextBox>
          <span>*</span>
          <Font text="투표 제목" kind="label1" color="black" />
        </S.TextBox>
        <Input
          id="voteName"
          type="text"
          placeholder="투표 제목을 입력해주세요."
        />
      </S.InputBox>
      <S.InputBox>
        <S.TextBox>
          <span>*</span>
          <Font text="투표 기간" kind="label1" color="black" />
        </S.TextBox>
        {/* 나중에 날짜 선택 컴포넌트로 바꿀 것 */}
        <div style={{ display: "flex", gap: "40px" }}>
          <Input id="fuck" type="text" placeholder="fuck you bitch" />
          <Input id="fuck" type="text" placeholder="fuck you bitch" />
        </div>
      </S.InputBox>
      <S.InputBox>
        <S.TextBox>
          <span>*</span>
          <Font text="투표설명" kind="label1" color="black" />
        </S.TextBox>
        <Input
          id="voteExplain"
          type="text"
          placeholder="투표에 대한 설명을 입력해주세요."
        />
      </S.InputBox>
      <S.FlexBox>
        <S.InputBox>
          <S.TextBox>
            <span>*</span>
            <Font text="투표설명" kind="label1" color="black" />
          </S.TextBox>
          <Font
            text="투표항목은 최소 2개 이상 선택해주세요."
            kind="label3"
            color="gray400"
          />
        </S.InputBox>
        <img
          src={addButton}
          alt=""
          onClick={addVote}
          style={{ cursor: "pointer" }}
        />
      </S.FlexBox>
      <VoteModal />
    </S.Container>
  );
};

export default MakingVotePage;
