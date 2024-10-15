import styled from "styled-components";
import { Color } from "../../../Styles/Color";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  width: 20%;
  height: 100vh;
  min-width: 20%;
  background-color: ${Color.main0};
  position: relative;
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Heading = styled.div`
  width: 54%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-top: 81px;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px 46px;
  margin-bottom: 90px;
`;

export const NavElement = styled(Link)`
  height: 77px;
  background-color: ${Color.main0};
  display: flex;
  justify-content: start;
  gap: 32px;
`;

export const Logout = styled.div`
  width: 100%;
  background-color: ${Color.main0};
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 40px;
  padding: 24px 46px;
  gap: 24px;
  cursor: pointer;
`;
