import {Component} from 'react'

import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginMainContainer,
  DetailsFillContainer,
  AppLogoImage,
  FormContainer,
  LabelText,
  InputContainer,
  ShowLabel,
  ShowPassCont,
  CheckboxContainer,
  LoginButton,
  ErrorMessage,
} from './styledComponents'
import WatchContext from '../../context/WatchContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showError: false,
    errorMsg: '',
    showPassword: false,
  }

  nameChange = event => {
    this.setState({
      username: event.target.value,
    })
  }

  passChange = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = message => {
    this.setState({
      showError: true,
      errorMsg: message,
    })
  }

  loginCheck = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  toggleCheck = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  render() {
    const {showError, errorMsg, showPassword} = this.state
    const passType = showPassword ? 'type' : 'password'
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <LoginMainContainer isDark={isDark}>
              <DetailsFillContainer>
                <AppLogoImage
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="nxt watch logo"
                />
                <FormContainer onSubmit={this.loginCheck}>
                  <LabelText htmlFor="username">USERNAME</LabelText>
                  <InputContainer
                    onChange={this.nameChange}
                    type="text"
                    placeholder="Username"
                    id="username"
                  />
                  <LabelText htmlFor="password">PASSWORD</LabelText>
                  <InputContainer
                    onChange={this.passChange}
                    type={passType}
                    placeholder="Password"
                    id="password"
                  />
                  <ShowPassCont>
                    <CheckboxContainer
                      onChange={this.toggleCheck}
                      type="checkbox"
                      id="pass"
                      name="password"
                    />
                    <ShowLabel htmlFor="pass" isDark={isDark}>
                      Show Password
                    </ShowLabel>
                  </ShowPassCont>
                  <LoginButton type="submit">Login</LoginButton>
                  {showError ? <ErrorMessage>{errorMsg}</ErrorMessage> : ''}
                </FormContainer>
              </DetailsFillContainer>
            </LoginMainContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Login
