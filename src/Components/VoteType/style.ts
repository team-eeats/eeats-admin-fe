import styled from "styled-components";
import { Color } from "../../Styles/Color";

export const VoteTypeContainer = styled.div`
  width: 400px;
  height: 58px;
  display: flex;
`;

interface TypeOfVoteType {
  select: boolean;
}

export const TypeOfVote = styled.div<TypeOfVoteType>`
  width: 50%;
  height: 58px;
  border-radius: 52px;
  background-color: ${(prop) =>
    prop.select ? `${Color.main300}` : `${Color.white}`};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;
