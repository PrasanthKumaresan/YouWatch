import styled from 'styled-components'

export const GameThumbnailList = styled.div`
margin: 10px 12px 10px 3px;
display: flex;
flex-direction: column;
color: ${props => (props.isDark? 'white': 'black')};
font-family: "roboto";
`
export const GameImage = styled.img`
width:150px;
height:170px;
border-radius: 12px;
margin-bottom: 5px;
`
export const GameTitle = styled.h1`
font-size: 15px;
font-weight: 500;
margin-bottom: 0px;
`
export const GameVideosView = styled.p`
color: #616e7c;
font-size: 15px;
font-weight: 500;
margin-top: 0px;
margin-bottom: 0px;
`
