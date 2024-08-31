import styled from 'styled-components'

export const HomeMainContainer = styled.div`
height: 100vh;
width: 100vw;
background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
position: relative;
overflow-y: scroll;
`
export const SearchContainer = styled.div`
border: 1px solid #606060;
width: 300px;
display: flex;
justify-content: space-between;
height: 35px;
background-color: transparent;
margin: 10px 0px 10px 0px;
`
export const SearchInputContainer = styled.input`
width: 250px;
background-color: transparent;
color: #64748b;
outline: none;
border: none;
border-right: 1px solid black;
padding: 5px 10px 5px 5px;
`
export const ArrangeSearchContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
`
export const IconContainer = styled.button`
display:flex;
justify-content: center;
align-items: center;
width:50px;
border: none;
outline: none;
border-width: 0px;
cursor: pointer;
background-color: #cccccc;
`
export const VideoUnorderList = styled.ul`
list-style-type: none;
padding-left: 0;
height: 100%;
`
export const LoaderComponent = styled.div`
width: 100%;
height: 400px;
display: flex;
justify-content: center;
align-items: center;
color: ${props => (props.isDark ? 'white' : 'black')}
`
