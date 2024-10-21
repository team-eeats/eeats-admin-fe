import styled from "styled-components"
import { Color } from "../../Styles/Color"

interface ListProp {
  selected: boolean
}

export const Container = styled.div`
width: 20vw;
height: 100vh;
background-color: ${Color.main0};
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 30px 0 40px;
`

export const Content = styled.div`
display: flex;
flex-direction: column;
gap: 70px;
`

export const LogoAndNameWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const ListWrap = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
`

export const List = styled.div<ListProp>`
display: flex;
gap: 32px;
padding: 24px 44px;
background-color: ${({selected}) => selected ? Color.main300 : Color.main0 };
`

export const LogoutWrap = styled.div`
display: flex;
gap: 32px;
padding: 24px 44px;
`