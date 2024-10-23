import styled from "styled-components"
import { Color } from "../../Styles/Color"

export const Container = styled.div`
width: 100%;
height: 100vh;
padding: 60px 0 0 120px;
`

export const Content = styled.div`
width: 1040px;
display: flex;
flex-direction: column;
gap: 50px;
`

export const NoticeManageContent = styled.div`
width: 720px;
display: flex;
flex-direction: column;
gap: 50px;
`

export const TitleWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

export const NoticeWrap = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
`

export const Button = styled.button`
display: flex;
align-items: center;
padding: 8px 12px;
gap: 4px;
border: none;
border-radius: 12px;
background-color: ${Color.main500};
`

export const LabelInputWrap = styled.div`
width: 720px;
display: flex;
flex-direction: column;
gap: 12px;
`

export const LabelTitleWrap = styled.div`
display: flex;
gap: 2px;
`

export const Input = styled.input`
padding: 20px 24px;
border: none;
border-radius: 12px;
background-color: ${Color.gray0};
`

export const TextArea = styled.textarea`
height: 300px;
padding: 20px 24px;
border: none;
border-radius: 12px;
background-color: ${Color.gray0};
`