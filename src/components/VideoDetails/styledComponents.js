import styled from 'styled-components'

export const DetailsMainContainer = styled.div`
height: 100vh;
width: 100vw;
background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
position: relative;
overflow-y : scroll;
color: ${props => (props.isDark ? 'white' : 'black')}
`
export const DetailsVideoPlay = styled.div`
width: 100%;
height: 250px;
margin-top: 20px;
background-color: black;
display: flex;
justify-content: center;
align-items: center;
`
export const VideoDet = styled.div`
height: 100%;
width: 100%;
`
export const WordingDetailContainer = styled.div`
height: 100%;
width: 100%;
padding: 15px;
`
export const DetailsDecription = styled.h1`
font-family: "roboto";
font-size: 20px;
font-weight: 400;
`
export const DetailsviewUl = styled.ul`
display: flex;
padding-left: 0;
width: 100%;
`
export const ViewsLi = styled.li`
color: #64748b;
font-family: "roboto";
font-size: 15px;
font-weight: 400;
list-style-type: none;
margin-right: 10px;
`
export const YearsLi = styled.li`
color: #64748b;
font-family: "roboto";
font-size: 15px;
font-weight: 400;
margin-left: 20px;
`
export const LikesContUl = styled.div`
display: flex;
width: 100%;
`
export const LikeButton = styled.button`
display: flex;
align-items: center;
cursor: pointer;
color: ${props => (props.isLike ? '#2563eb' : '#64748b')};
font-family: "roboto";
margin-right: 15px;
border: none;
border-width: 0px;
outline: none;
background-color: transparent;
font-weight: bold;
`
export const DisLikeButton = styled.button`
display: flex;
align-items: center;
cursor: pointer;
color: ${props => (props.isDislike ? '#2563eb' : '#64748b')};;
font-family: "roboto";
margin-right: 15px;
border: none;
border-width: 0px;
outline: none;
background-color: transparent;
font-weight: bold;
`
export const SaveButton = styled(DisLikeButton)`
color: ${props => (props.isSaved ? '#2563eb' : '#64748b')}
`
export const LikeText = styled.p`
font-size: 14px;
margin-left: 5px;
`
export const HorizontalLine = styled.hr`
border: 1px solid #64748b;
width: 100%
`
export const ChannelDetails = styled.div`
display: flex;
width: 100%;
`
export const DetailsLogo = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;
`
export const ChannelNameCont = styled.div`
display: flex;
flex-direction: column;
margin-left: 12px;
font-family: "roboto";
`
export const ChannelName = styled.h1`
font-size: 16px;
font-weight: 400;
margin-bottom: 0px;
`
export const ChannelSubs = styled.p`
color: #64748b;
font-size: 13px;
font-weight: 400;
margin-top: 0px;
`
export const AboutVideo = styled.p`
font-family: "roboto";
font-size: 14px;
font-weight: 400;
`
