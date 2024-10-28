import styled from "styled-components";
import { Color } from "../../Styles/Color";

interface ContentProps {
  selected?: boolean;
}

export const Container = styled.div<ContentProps>`
  width: 1040px;
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  gap: 20px;
  border: 1px solid
    ${({ selected }) => (selected ? Color.main200 : Color.gray50)};
  border-radius: 24px;
`;

export const TopWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NicknameAndDateWrap = styled.div`
  display: flex;
  gap: 12px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: none;
  background-color: ${Color.main0};
  border-radius: 8px;
  outline: none;
`;
