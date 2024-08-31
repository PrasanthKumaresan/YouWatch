import {
  SaveMainCont,
  EmptyCont,
  EmptyImage,
  EmptyHeader,
  EmptyPara,
} from './styledComponents'
import WatchContext from '../../context/WatchContext'
import Header from '../Header'
import HamburgerMenu from '../HamburgerMenu'
import VideoThumbnail from '../VideoThumbnail'

const SavedVideos = () => (
  <WatchContext.Consumer>
    {value => {
      const {savedList, isDark, isHamClicked} = value
      const isListempty = savedList.length === 0
      return (
        <SaveMainCont data-testid="savedVideos" isDark={isDark}>
          <Header />
          {isHamClicked && <HamburgerMenu />}
          {isListempty ? (
            <EmptyCont isDark={isDark}>
              <EmptyImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
              <EmptyHeader>No saved videos found</EmptyHeader>
              <EmptyPara>
                You can save your videos while watching them
              </EmptyPara>
            </EmptyCont>
          ) : (
            savedList.map(each => (
              <VideoThumbnail key={each.id} videos={each} />
            ))
          )}
        </SaveMainCont>
      )
    }}
  </WatchContext.Consumer>
)

export default SavedVideos
