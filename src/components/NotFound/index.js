import WatchContext from '../../context/WatchContext'
import {
  NotFoundMainCont,
  NFfailureCont,
  NFImage,
  NFHeader,
  NFPara,
} from './styledComponents'
import Header from '../Header'
import HamburgerMenu from '../HamburgerMenu'

const NotFound = () => (
  <WatchContext.Consumer>
    {value => {
      const {isDark, isHamClicked} = value
      return (
        <NotFoundMainCont isDark={isDark}>
          <Header />
          {isHamClicked && <HamburgerMenu />}
          <NFfailureCont>
            <NFImage
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
              }
              alt="not found"
            />
            <NFHeader>Page Not Found</NFHeader>
            <NFPara>
              We are sorry, the page you requested could not be found.
            </NFPara>
          </NFfailureCont>
        </NotFoundMainCont>
      )
    }}
  </WatchContext.Consumer>
)

export default NotFound
