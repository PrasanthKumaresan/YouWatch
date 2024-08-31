import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {BiSun} from 'react-icons/bi'
import Popup from 'reactjs-popup'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import WatchContext from '../../context/WatchContext'
import {
  HeaderContainer,
  LogoContainer,
  HeaderLogoImg,
  HomeFeaturesContainer,
  PopupContainer,
  PopQues,
  ConfirmPop,
  PopButton,
  PopbtnArr,
  ThemeButton,
} from './styledComponents'

const Header = props => {
  const triggerLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <WatchContext.Consumer>
      {value => {
        const {hamClickCheck, isDark, darkToggle} = value
        return (
          <HeaderContainer isDark={isDark}>
            <LogoContainer>
              <Link to="/">
                <HeaderLogoImg
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
              </Link>
            </LogoContainer>

            <HomeFeaturesContainer isDark={isDark}>
              {isDark ? (
                <ThemeButton isDark={isDark} type="button" data-testid="theme">
                  <BiSun size={20} onClick={darkToggle} />
                </ThemeButton>
              ) : (
                <ThemeButton isDark={isDark} type="button" data-testid="theme">
                  <FaMoon size={20} onClick={darkToggle} />
                </ThemeButton>
              )}
              <ThemeButton isDark={isDark} type="button">
                <GiHamburgerMenu onClick={hamClickCheck} size={20} />
              </ThemeButton>

              <Popup
                modal
                trigger={<FiLogOut size={20} />}
                position="bottom center"
              >
                {close => (
                  <>
                    <PopupContainer isDark={isDark}>
                      <PopQues>Are you sure you want to logout?</PopQues>
                      <PopbtnArr>
                        <PopButton onClick={() => close()}>Cancel</PopButton>
                        <ConfirmPop onClick={triggerLogout}>Confirm</ConfirmPop>
                      </PopbtnArr>
                    </PopupContainer>
                  </>
                )}
              </Popup>
            </HomeFeaturesContainer>
          </HeaderContainer>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default withRouter(Header)
