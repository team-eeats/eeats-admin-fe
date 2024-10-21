import styled from "styled-components";

export const LoginPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 60px;
  padding: 0px 34vw;
  & > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  & > Button {
    align-self: flex-end;
    position: relative;
    right: 21px;
  }
`;
