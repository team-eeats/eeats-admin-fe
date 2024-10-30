import { CompletePhotoVote } from "../../Components/CompletePhotoVote";
import { PhotoVote } from "../../Components/PhotoVote";
import TextVote from "../../Components/TextVote";
import VoteType from "../../Components/VoteType";
import useVoteTypeStore from "../../store/useVoteTypeStore";
import { Font } from "../../Styles/Font";
import * as S from "./style";
import MakingVoteImg from "../../assets/img/SVG/makingVoteImg.svg";
import { useNavigate } from "react-router-dom";

const VotePage = () => {
  const { selectType } = useVoteTypeStore();
  const navigate = useNavigate();

  const makingVote = () => {
    navigate("makingVote");
  };

  return (
    <S.VoteContainer>
      <S.TopButtonContainer>
        <VoteType />
        <S.MakingVoteButton onClick={makingVote}>
          <Font text="투표 만들기" kind="Button2" color="white" />
          <img src={MakingVoteImg} alt="" />
        </S.MakingVoteButton>
      </S.TopButtonContainer>
      {selectType ? (
        <>
          <PhotoVote />
          <TextVote key="1" date="2024-09-24" header="" content="" />
        </>
      ) : (
        <>
          <CompletePhotoVote />
          <TextVote
            key="2"
            date="2007-11-05"
            header="오늘은"
            content="김희찬 생일"
          />
        </>
      )}
    </S.VoteContainer>
  );
};

export default VotePage;
