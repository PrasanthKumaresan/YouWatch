import styled from 'styled-components'

export const SaveMainCont = styled.div`
height: 100vh;
width: 100vw;
background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
position: relative;
font-family: "roboto";
color: ${props => (props.isDark ? 'white' : 'black')};
overflow-y: scroll;
`
export const EmptyCont = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: "roboto";
color: ${props => (props.isDark ? 'white' : 'black')};
`
export const EmptyImage = styled.img`
height: 250px;
width: 280px;
`
export const EmptyHeader = styled.h1`
font-size: 25px;
font-weight: bold;
text-align:center;
`
export const EmptyPara = styled.p`
font-size: 18px;
color: #7e858e;
font-weight: bold;
text-align: center;
`
