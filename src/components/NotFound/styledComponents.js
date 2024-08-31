import styled from 'styled-components'

export const NFfailureCont = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: "roboto";
`
export const NFImage = styled.img`
height: 250px;
width: 280px;
`
export const NFHeader = styled.h1`
font-size: 25px;
font-weight: bold;
text-align:center;
`
export const NFPara = styled.p`
font-size: 18px;
color: #7e858e;
font-weight: bold;
text-align: center;
`
export const NotFoundMainCont = styled.div`
color: ${prop => (prop.isDark ? 'white' : 'black')};
background-color: ${prop => (prop.isDark ? '#0f0f0f' : '#f9f9f9')};
height: 100vh;
width: 100vw;
overflow-y: scroll;
`
