import styled from "styled-components";
import { Color } from "../../Styles/Color";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-left: 7vw;
  padding-top: 60px;
  width: 50%;
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TextBox = styled.div`
  display: flex;
  & > span {
    color: ${Color.main400};
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
