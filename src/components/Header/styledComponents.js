import styled from 'styled-components'

export const HeaderContainer = styled.div`
height: 50px;
width: 100%;
padding: 15px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
`
export const LogoContainer = styled.div``
export const HeaderLogoImg = styled.img`
height: 25px;
width: 100px;
`
export const HomeFeaturesContainer = styled.div`
width: 40%;
display: flex;
justify-content: space-around;
margin-right: 0;
color:${props => (props.isDark ? '#f9f9f9' : '#181818')};
`
export const ProfileImage = styled.img`
height: 80px;
width: 80px;
border-radius: 50%;
`
export const PopupContainer = styled.div`
background-color: ${props => (props.isDark ? 'black' : 'white')};
height: 150px;
width: 250px;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: ${props => (props.isDark ? 'white' : '#00306e')};
font-family: "roboto";
`
export const PopQues = styled.h1`
font-size: 15px;
font-weight: bold;
`
export const PopButton = styled.button`
background-color: transparent;
color: #94a3b8;
border: 1px solid #606060;
height: 25px;
width: 90px;
border-radius: 6px;
margin-right: 8px;
`
export const ConfirmPop = styled(PopButton)`
background-color: #3b82f6;
color: white;
border-width: 0px;
border-radius: 6px;
margin-left: 5px;
`
export const PopbtnArr = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
export const ThemeButton = styled.button`
background-color: transparent;
border: none;
border-width: 0px;
outline: none;
cursor: pointer;
color:${props => (props.isDark ? '#f9f9f9' : '#181818')};
`
