import styled from "styled-components";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Container>
      <SideBar />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </Container>
  )
}

export default Layout

const Container = styled.div`
width: 100%;
height: 100vh;
`

const ContentWrapper = styled.div`
  flex: 1;
  padding-left: 20vw;
  overflow-y: auto;
`;