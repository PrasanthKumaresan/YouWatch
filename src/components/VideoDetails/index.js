import {Component} from 'react'

import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import WatchContext from '../../context/WatchContext'
import HomeFailure from '../HomeFailure'
import {
  DetailsMainContainer,
  DetailsVideoPlay,
  VideoDet,
  WordingDetailContainer,
  DetailsDecription,
  DetailsviewUl,
  LikeButton,
  LikesContUl,
  ViewsLi,
  YearsLi,
  LikeText,
  HorizontalLine,
  ChannelDetails,
  DetailsLogo,
  ChannelNameCont,
  ChannelSubs,
  ChannelName,
  AboutVideo,
  SaveButton,
  DisLikeButton,
} from './styledComponents'
import HamburgerMenu from '../HamburgerMenu'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoDetails extends Component {
  state = {
    detailsList: {},
    isLoading: true,
    isLike: false,
    isDislike: false,
    isSaved: false,
    status: apiStatus.initial,
  }

  componentDidMount() {
    this.getDetailsList()
  }

  startSearch = () => {
    this.getDetailsList()
  }

  getDetailsList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const token = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    const formattedData = {
      channel: {
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
      },
      description: data.video_details.description,
      id: data.video_details.id,
      publishedAt: data.video_details.published_at,
      thumbnailUrl: data.video_details.thumbnail_url,
      title: data.video_details.title,
      videoUrl: data.video_details.video_url,
      viewCount: data.video_details.view_count,
    }
    console.log(formattedData)
    if (response.ok === true) {
      this.setState({
        detailsList: formattedData,
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

  videoDisLiked = () => {
    this.setState(prevState => ({
      isDislike: !prevState.isDislike,
      isLike: false,
    }))
  }

  videoLiked = () => {
    this.setState(prevState => ({
      isLike: !prevState.isLike,
      isDislike: false,
    }))
  }

  saveChange = () => {
    this.setState(prevState => ({
      isSaved: !prevState.isSaved,
    }))
  }

  renderVideoDetails = () => {
    const {detailsList, isDislike, isLike, isSaved, status} = this.state
    const {
      channel,
      description,
      id,
      publishedAt,
      thumbnailUrl,
      title,
      videoUrl,
      viewCount,
    } = detailsList
    const {name, profileImageUrl, subscriberCount} = channel
    if (status === 'SUCCESS') {
      return (
        <WatchContext.Consumer>
          {value => {
            const {toggleSave} = value
            const saveVideoList = () => {
              toggleSave(detailsList)
              this.saveChange()
            }
            return (
              <VideoDet>
                <DetailsVideoPlay>
                  <ReactPlayer
                    height={200}
                    width={420}
                    url={videoUrl}
                    light={thumbnailUrl}
                    controls
                  />
                </DetailsVideoPlay>
                <WordingDetailContainer>
                  <DetailsDecription>{title}</DetailsDecription>
                  <DetailsviewUl>
                    <ViewsLi>{viewCount} views</ViewsLi>
                    <YearsLi>
                      {formatDistanceToNow(new Date(publishedAt))}
                    </YearsLi>
                  </DetailsviewUl>
                  <LikesContUl>
                    <LikeButton isLike={isLike} onClick={this.videoLiked}>
                      <BiLike size={20} />
                      <LikeText>Like</LikeText>
                    </LikeButton>
                    <DisLikeButton
                      isDislike={isDislike}
                      onClick={this.videoDisLiked}
                    >
                      <BiDislike size={20} />
                      <LikeText>Dislike</LikeText>
                    </DisLikeButton>
                    <SaveButton isSaved={isSaved} onClick={saveVideoList}>
                      <BiListPlus size={20} />
                      <LikeText id={id}>{isSaved ? 'Saved' : 'Save'}</LikeText>
                    </SaveButton>
                  </LikesContUl>
                  <HorizontalLine />
                  <ChannelDetails>
                    <DetailsLogo src={profileImageUrl} alt="channel logo" />
                    <ChannelNameCont>
                      <ChannelName>{name}</ChannelName>
                      <ChannelSubs>{subscriberCount} subscribers</ChannelSubs>
                    </ChannelNameCont>
                  </ChannelDetails>
                  <AboutVideo>{description}</AboutVideo>
                </WordingDetailContainer>
              </VideoDet>
            )
          }}
        </WatchContext.Consumer>
      )
    }
    return <HomeFailure start={this.startSearch} />
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color=" #0f0f0f" height="50" width="50" />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <WatchContext.Consumer>
        {value => {
          const {isDark, isHamClicked} = value
          return (
            <DetailsMainContainer
              data-testid="videoItemDetails"
              isDark={isDark}
            >
              <Header />
              {isHamClicked && <HamburgerMenu />}
              {isLoading ? this.renderLoader() : this.renderVideoDetails()}
            </DetailsMainContainer>
          )
        }}
      </WatchContext.Consumer>
    )
  }
}

export default VideoDetails
