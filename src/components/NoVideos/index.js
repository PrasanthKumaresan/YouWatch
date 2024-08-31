import WatchContext from '../../context/WatchContext'
import {
  NfailureCont,
  NImage,
  NHeader,
  NPara,
  NRetryButton,
} from './styledComponents'

const NoVideos = props => {
  const {start} = props
  const retry = () => {
    start()
  }
  return (
    <WatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <NfailureCont isDark={isDark}>
            <NImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NHeader>No Search results found</NHeader>
            <NPara>Try different key words or remove search filter</NPara>
            <NRetryButton onClick={retry}>Retry</NRetryButton>
          </NfailureCont>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default NoVideos
