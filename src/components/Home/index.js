import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {IoIosSearch} from 'react-icons/io'
import {
  HomeMainContainer,
  SearchContainer,
  SearchInputContainer,
  IconContainer,
  ArrangeSearchContainer,
  VideoUnorderList,
  LoaderComponent,
} from './styledComponents'
import VideoThumbnail from '../VideoThumbnail'
import Banner from '../Banner'
import Header from '../Header'
import HamburgerMenu from '../HamburgerMenu'
import WatchContext from '../../context/WatchContext'
import HomeFailure from '../HomeFailure'
import NoVideos from '../NoVideos'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    videosList: [],
    isLoading: true,
    searchInput: '',
    showBanner: true,
    status: apiStatus.initial,
  }

  componentDidMount() {
    this.getVideosList()
  }

  startSearch = () => {
    this.getVideosList()
  }

  searchInChanged = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  getVideosList = async () => {
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
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
    if (response.ok === true) {
      this.setState({
        videosList: formattedData,
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

  closeBanner = () => {
    this.setState({
      showBanner: false,
    })
  }

  renderLoader = isDark => (
    <LoaderComponent isDark={isDark}>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color=" #0f0f0f" height="50" width="50" />
      </div>
    </LoaderComponent>
  )

  renderVideos = () => {
    const {videosList, status} = this.state
    console.log(videosList)
    if (status === 'SUCCESS') {
      if (videosList.length === 0) {
        return <NoVideos start={this.startSearch} />
      }
      return (
        <VideoUnorderList>
          {videosList.map(each => (
            <VideoThumbnail key={each.id} videos={each} />
          ))}
        </VideoUnorderList>
      )
    }
    return <HomeFailure start={this.startSearch} />
  }

  render() {
    const {isLoading, showBanner, searchInput} = this.state
    return (
      <WatchContext.Consumer>
        {value => {
          const {isHamClicked, isDark} = value
          return (
            <HomeMainContainer data-testid="home" isDark={isDark}>
              <Header />
              {isHamClicked ? <HamburgerMenu /> : ''}
              {showBanner ? <Banner closeBanner={this.closeBanner} /> : ''}
              <ArrangeSearchContainer>
                <SearchContainer>
                  <SearchInputContainer
                    value={searchInput}
                    placeholder="Search"
                    onChange={this.searchInChanged}
                    type="search"
                  />
                  <IconContainer
                    type="button"
                    data-testid="searchButton"
                    onClick={this.startSearch}
                  >
                    <IoIosSearch size={20} />
                  </IconContainer>
                </SearchContainer>
              </ArrangeSearchContainer>
              {isLoading ? this.renderLoader(isDark) : this.renderVideos()}
            </HomeMainContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default Home
