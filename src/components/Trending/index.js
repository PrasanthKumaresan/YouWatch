import {Component} from 'react'

import Cookies from 'js-cookie'
import {MdDelete} from 'react-icons/md'
import {FaFire} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import {
  TrendingMainContainer,
  TrendingStart,
  TrendingImageCont,
  TrendingHeader,
  TrendingVideosUnorder,
  LoaderComponent,
} from './styledComponents'
import Header from '../Header'
import VideoThumbnail from '../VideoThumbnail'
import WatchContext from '../../context/WatchContext'
import HamburgerMenu from '../HamburgerMenu'
import HomeFailure from '../HomeFailure'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {trendingList: [], isLoading: true, status: apiStatus.initial}

  componentDidMount() {
    this.getTrendingVideosList()
  }

  startSearch = () => {
    this.getTrendingVideosList()
  }

  getTrendingVideosList = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const formattedData = data.videos.map(each => ({
      channel: {
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
      },
      id: each.id,
      publishedAt: each.published_at,
      thumbnailUrl: each.thumbnail_url,
      title: each.title,
      viewCount: each.view_count,
    }))
    console.log(response.ok)
    if (response.ok === true) {
      console.log('true')
      this.setState({
        trendingList: formattedData,
        isLoading: false,
        status: apiStatus.success,
      })
    } else {
      console.log(false)
      this.setState({
        isLoading: false,
        status: apiStatus.failure,
      })
    }
  }

  renderVideos = () => {
    const {trendingList, status} = this.state
    if (status === 'SUCCESS') {
      return (
        <TrendingVideosUnorder>
          {trendingList.map(each => (
            <VideoThumbnail key={each.id} videos={each} />
          ))}
        </TrendingVideosUnorder>
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
            <TrendingMainContainer data-testid="trending" isDark={isDark}>
              <Header />
              {isHamClicked && <HamburgerMenu />}
              <TrendingStart>
                <TrendingImageCont>
                  <FaFire size={25} />
                </TrendingImageCont>
                <TrendingHeader>Trending</TrendingHeader>
              </TrendingStart>
              {isLoading ? this.renderLoader(isDark) : this.renderVideos()}
            </TrendingMainContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Trending
