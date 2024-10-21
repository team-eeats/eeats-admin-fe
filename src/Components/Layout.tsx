import styled from "styled-components";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Container>
      <SideBar />
      <Outlet />
    </Container>
  )
}

export default Layout

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: row;
`