import { CompletePhotoVote } from "../../Components/CompletePhotoVote";
import { PhotoVote } from "../../Components/PhotoVote";
import TextVote from "../../Components/TextVote";
import VoteType from "../../Components/VoteType";
import useVoteTypeStore from "../../store/useVoteTypeStore";
import * as S from "./style";

const VotePage = () => {
  const { selectType } = useVoteTypeStore();
  return (
    <S.VoteContainer>
      <VoteType />
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
