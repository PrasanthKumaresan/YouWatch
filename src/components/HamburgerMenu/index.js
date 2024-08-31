import {Component} from 'react'

import {AiFillHome} from 'react-icons/ai'
import {FaFire, FaGamepad} from 'react-icons/fa'
import {BiListPlus} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import {
  HamMainContainer,
  HamUnorderList,
  HamListText,
  HamList,
  ContHeader,
  MediaLogo,
  LogoContainer,
  ContactSection,
} from './styledComponents'
import WatchContext from '../../context/WatchContext'

class HamburgerMenu extends Component {
  render() {
    return (
      <WatchContext.Consumer>
        {value => {
          const {hamClickCheck, isDark} = value
          return (
            <HamMainContainer isDark={isDark}>
              <HamUnorderList>
                <Link to="/">
                  <HamList onClick={hamClickCheck}>
                    <AiFillHome size={18} />
                    <HamListText>Home</HamListText>
                  </HamList>
                </Link>
                <Link to="/trending">
                  <HamList onClick={hamClickCheck}>
                    <FaFire size={18} />
                    <HamListText>Trending</HamListText>
                  </HamList>
                </Link>
                <Link to="/gaming">
                  <HamList onClick={hamClickCheck}>
                    <FaGamepad size={18} />
                    <HamListText>Gaming</HamListText>
                  </HamList>
                </Link>
                <Link to="/saved-videos">
                  <HamList onClick={hamClickCheck}>
                    <BiListPlus size={20} />
                    <HamListText>Saved videos</HamListText>
                  </HamList>
                </Link>
              </HamUnorderList>
              <ContactSection>
                <ContHeader>CONTACT US</ContHeader>
                <LogoContainer>
                  <MediaLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <MediaLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <MediaLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </LogoContainer>
                <ContHeader>
                  Enjoy! Now to see your channels and recommendations!
                </ContHeader>
              </ContactSection>
            </HamMainContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default HamburgerMenu
