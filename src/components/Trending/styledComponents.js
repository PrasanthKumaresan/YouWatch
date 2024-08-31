import styled from 'styled-components'

export const TrendingMainContainer = styled.div`
height: 100vh;
width: 100vw;
background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
position: relative;
font-family: "roboto";
color: ${props => (props.isDark ? 'white' : 'black')};
overflow-y: scroll;
`
export const TrendingStart = styled.div`
width: 100%;
display: flex;
padding:15px;
`
export const TrendingImageCont = styled.div`
color: red;
align-self: center;
`
export const TrendingHeader = styled.h1`
font-size: 20px;
font-weight: bold;
margin-left: 10px;
`
export const TrendingVideosUnorder = styled.ul`
list-style-type: none;
padding-left: 0;
height: 100%;
overflow-y: scroll;
`
export const LoaderComponent = styled.div`
width: 100%;
height: 400px;
display: flex;
justify-content: center;
align-items: center;
color: ${props => (props.isDark ? 'white' : 'black')}
`
