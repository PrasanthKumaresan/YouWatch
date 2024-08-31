import styled from 'styled-components'

export const NfailureCont = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: "roboto";
color: ${prop => (prop.isDark ? 'white' : 'black')};
background-color: ${prop => (prop.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const NImage = styled.img`
height: 250px;
width: 280px;
`
export const NHeader = styled.h1`
font-size: 25px;
font-weight: bold;
text-align:center;
`
export const NPara = styled.p`
font-size: 18px;
color: #7e858e;
font-weight: bold;
text-align: center;
`
export const NRetryButton = styled.button`
background-color: #4f46e5;
height: 30px;
width: 85px;
color: white;
font-weight: bold;
border-radius: 6px;
border-widt: 0px;
`
