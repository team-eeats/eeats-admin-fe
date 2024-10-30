import styled from "styled-components";
import { Color } from "../../Styles/Color";

export const Container = styled.div`
width: 1040px;
display: flex;
flex-direction: column;
padding: 12px 0;
gap: 28px;
border-bottom: 1px solid ${Color.gray0};
`

export const IconAndTitleWrap = styled.div`
display: flex;
align-items: flex-start;
gap: 28px;
`

export const AnnouncementWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 28px;
`

export const InfoWrap = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
`

export const TitleWrap = styled.div`
display: flex;
align-items: flex-start;
gap: 4px;
`

export const Content = styled.div`
padding: 12px 20px;
border-radius: 8px;
background-color: ${Color.gray0};
`