import {Link} from 'react-router-dom'

import {
  GameThumbnailList,
  GameImage,
  GameTitle,
  GameVideosView,
} from './styledComponents'
import WatchContext from '../../context/WatchContext'

const GameThumbnail = props => {
  const {videos} = props
  const {id, thumbnailUrl, title, viewCount} = videos
  return (
    <WatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <GameThumbnailList isDark={isDark}>
            <Link to={`/videos/${id}`}>
              <GameImage alt="video thumbnail" src={thumbnailUrl} />
            </Link>
            <GameTitle>{title}</GameTitle>
            <GameVideosView>{viewCount} Watching</GameVideosView>
            <GameVideosView>Worldwide</GameVideosView>
          </GameThumbnailList>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default GameThumbnail
