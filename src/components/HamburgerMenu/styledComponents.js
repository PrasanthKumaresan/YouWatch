import styled from 'styled-components'

export const HamMainContainer = styled.div`
background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
width: 60%;
display: block;
left: 0;
top: 0;
height: 400px;
flex-direction: column;
justify-content: space-between;
position: absolute;
margin-top: 50px;
z-index: 10;
color: ${props => (props.isDark ? 'white' : 'black')};
`
export const HamUnorderList = styled.ul`
display: flex;
flex-direction: column;
list-style-type: none;
width:100%;
padding-left: 0;
`
export const HamList = styled.div`
width: 100%;
height: 30px;
display: flex;
color: ${props => (props.isActive ? 'red' : '#64748b')};
background-color: ${props => (props.isActive ? '#ccdffc' : 'transparent')};
justify-content: flex-start;
align-items: center;
cursor: pointer;
padding-left: 15px;
text-decoration: none;
`
export const LinkArrange = styled.li`
text-decoration: none;
`
export const HamListText = styled.p`
font-family: "roboto";
font-size: 16px;
color: ${props => (props.isActive ? 'black' : '#64748b')};
font-weight: 400;
margin-left: 10px;
text-decoration: none;
`
export const ContHeader = styled.p`
font-family: "roboto";
font-size: 16px;
font-weight: bolder;
`
export const MediaLogo = styled.img`
height: 30px;
width: 30px;
margin-right: 15px;
`
export const LogoContainer = styled.div`
display: flex
`
export const ContactSection = styled.div`
padding: 15px;
`
