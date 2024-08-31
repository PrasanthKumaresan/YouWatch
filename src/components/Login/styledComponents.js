import styled from 'styled-components'

export const LoginMainContainer = styled.div`
min-height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 15px;
background-color: ${prop => (prop.isDark ? 'black' : 'white')};
color: ${prop => (prop.isDark ? 'white' : '#94a3b8')};
`
export const DetailsFillContainer = styled.div`
height: 300px;
width: 300px;
box-shadow: 0 0px 15px 0px #94a3b8;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const AppLogoImage = styled.img`
height: 30px;
width: 120px;
`
export const FormContainer = styled.form`
display: flex;
flex-direction: column;
width: 100%
`
export const LabelText = styled.label`
font-family: "roboto";
font-size: 12px;
font-weight: bold;
margin-top: 15px;
`
export const InputContainer = styled.input`
width: 88%;
height: 30px;
padding: 5px 10px 5px 5px;
border: 1px solid #475569;
color: #475569;
`
export const ShowLabel = styled.label`
margin-left: 5px;
margin-top: 2px;
font-size: 15px;
font-weight: 500;
font-family: "roboto";
color: ${prop => (prop.isDark ? 'white' : 'black')};
`
export const ShowPassCont = styled.div`
display: flex;
margin-top: 10px;
`
export const LoginButton = styled.button`
height: 35px;
width: 90%;
color: white;
background-color: #3b82f6;
font-weight: bold;
border-radius: 6px;
border-width: 0px;
margin-top: 10px;
`
export const CheckboxContainer = styled.input`
border: 1px solid black;
width: 15px;
height: 15px;
align-self: center;
`
export const ErrorMessage = styled.p`
font-family: "roboto",
font-size: 10px;
color: red;
font-weight: 500;
margin-top: 0;
`
