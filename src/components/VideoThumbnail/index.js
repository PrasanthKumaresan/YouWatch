import {formatDistanceToNow} from 'date-fns'

import {Link} from 'react-router-dom'

import {
  HomeListContainer,
  HomeImageContainer,
  HomeVideoDetails,
  HomeChannel,
  HomeChannelImage,
  VideoDetailWords,
  VideoHomeTitle,
  ChannelName,
  HomeUl,
} from './styledComponents'
import WatchContext from '../../context/WatchContext'

const VideoThumbnail = props => {
  const {videos} = props
  console.log(videos)
  const {channel, id, publishedAt, thumbnailUrl, title, viewCount} = videos
  const {name, profileImageUrl} = channel
  return (
    <WatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <HomeListContainer isDark={isDark}>
            <Link to={`/videos/${id}`}>
              <HomeImageContainer src={thumbnailUrl} alt="video thumbnail" />
            </Link>
            <HomeVideoDetails>
              <HomeChannel>
                <HomeChannelImage src={profileImageUrl} alt="channel logo" />
                <VideoDetailWords>
                  <VideoHomeTitle>{title}</VideoHomeTitle>
                  <HomeUl>
                    <ChannelName>{name}</ChannelName>
                    <li>{viewCount} views</li>
                    <li>{formatDistanceToNow(new Date(publishedAt))}</li>
                  </HomeUl>
                </VideoDetailWords>
              </HomeChannel>
            </HomeVideoDetails>
          </HomeListContainer>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default VideoThumbnail
