import styled from "styled-components";
import { Color } from "../../Styles/Color";

export const Container = styled.div`
  width: 100%;
  height: 320px;
  border: 1px solid ${Color.gray50};
  border-radius: 12px;
  padding: 36px 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: relative;
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

export const VoteImgInput = styled.label`
  width: 100%;
  height: 100px;
  background-color: ${Color.gray0};
  border: none;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
`;

export const XImg = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 12px;
  top: 12px;
  cursor: pointer;
`;
