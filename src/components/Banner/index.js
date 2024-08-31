import {AiOutlineClose} from 'react-icons/ai'

import {
  BannerContainer,
  BannerWords,
  BannerLogo,
  GetItBtn,
  BannerDescription,
  CloseContainer,
  ArrangeBanner,
  Closebtn,
} from './styledComponents'

const Banner = props => {
  const {closeBanner} = props
  const closeClicked = () => {
    closeBanner()
  }
  return (
    <BannerContainer data-testid="banner">
      <ArrangeBanner>
        <BannerWords>
          <BannerLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <BannerDescription>
            Buy Nxt Watch Premium prepaid plans with UPI
          </BannerDescription>
          <GetItBtn>GET IT NOW</GetItBtn>
        </BannerWords>
        <CloseContainer>
          <Closebtn type="button" data-testid="close">
            <AiOutlineClose onClick={closeClicked} size={15} />
          </Closebtn>
        </CloseContainer>
      </ArrangeBanner>
    </BannerContainer>
  )
}

export default Banner
