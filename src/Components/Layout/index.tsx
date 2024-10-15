import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

const Layout = () => {
  return (
    <Container>
      <Sidebar />
      <Outlet />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
`;
