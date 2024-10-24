import styled from "styled-components";
import { Color } from "../../Styles/Color";

export const VoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-left: 7vw;
  padding-top: 60px;
`;

export const TopButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
`;

export const MakingVoteButton = styled.div`
  width: 162px;
  height: 52px;
  background-color: ${Color.main500};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;
