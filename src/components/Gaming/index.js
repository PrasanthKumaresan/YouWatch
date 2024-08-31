import {Component} from 'react'

import Cookies from 'js-cookie'
import {FaGamepad} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import GameThumbnail from '../GameThumbnail'
import {
  GamingMainContainer,
  GamingStart,
  GamingImageCont,
  GamingHeader,
  GamingVideosUnordered,
  LoaderComponent,
} from './styledComponents'
import WatchContext from '../../context/WatchContext'
import HamburgerMenu from '../HamburgerMenu'
import HomeFailure from '../HomeFailure'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {gamingList: [], isLoading: true, status: apiStatus.initial}

  componentDidMount() {
    this.getGamingList()
  }

  startSearch = () => {
    this.getGamingList()
  }

  getGamingList = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    const formattedData = data.videos.map(each => ({
      id: each.id,
      thumbnailUrl: each.thumbnail_url,
      title: each.title,
      viewCount: each.view_count,
    }))
    if (response.ok === true) {
      this.setState({
        gamingList: formattedData,
        isLoading: false,
        status: apiStatus.success,
      })
    } else {
      this.setState({
        isLoading: false,
        status: apiStatus.failure,
      })
    }
  }

  renderVideos = () => {
    const {gamingList, status} = this.state
    if (status === 'SUCCESS') {
      return (
        <GamingVideosUnordered>
          {gamingList.map(each => (
            <GameThumbnail key={each.id} videos={each} />
          ))}
        </GamingVideosUnordered>
      )
    }
    return <HomeFailure start={this.startSearch} />
  }

  renderLoader = isDark => (
    <LoaderComponent isDark={isDark}>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="black" height="50" width="50" />
      </div>
    </LoaderComponent>
  )

  render() {
    const {isLoading} = this.state
    return (
      <WatchContext.Consumer>
        {value => {
          const {isHamClicked, isDark} = value
          return (
            <GamingMainContainer data-testid="gaming" isDark={isDark}>
              <Header />
              {isHamClicked && <HamburgerMenu />}
              <GamingStart>
                <GamingImageCont>
                  <FaGamepad size={30} />
                </GamingImageCont>
                <GamingHeader>Gaming</GamingHeader>
              </GamingStart>
              {isLoading ? this.renderLoader(isDark) : this.renderVideos()}
            </GamingMainContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Gaming
