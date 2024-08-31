import styled from 'styled-components'

export const HomeListContainer = styled.li`
    width: 100%;
    display: flex;
    flex-direction: column;
    color: ${props => (props.isDark? 'white':'black')};
`
export const HomeImageContainer = styled.img`
width: 100%;
`
export const HomeVideoDetails = styled.div`
width: 100%;
padding: 15px;
`
export const HomeChannel = styled.div`
display: flex;
width: 100%;
flex-wrap: wrap;
`
export const HomeChannelImage = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;
`
export const VideoDetailWords = styled.div`
margin-left: 10px;
width: 100%;
width: 80%
`
export const VideoHomeTitle = styled.h1`
font-family: "roboto";
font-size: 15px;
font-weight: 500;
`
export const ChannelName = styled.li`
font-family: "roboto";
font-size: 13px;
color: #7e858e;
font-weight: 300;
list-style-type: none;
margin-left: -20px;
`
export const HomeUl = styled.ul`
display: flex;
justify-content: space-around;
width: 100%;
margin-left: -30px;
font-family: "roboto";
font-size: 13px;
color: #7e858e;
font-weight: 300;
`
