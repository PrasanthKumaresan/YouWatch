import WatchContext from '../../context/WatchContext'
import {
  HfailureCont,
  HImage,
  HHeader,
  HPara,
  RetryButton,
} from './styledComponents'

const HomeFailure = props => {
  const {start} = props
  const retry = () => {
    start()
  }
  return (
    <WatchContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <HfailureCont isDark={isDark}>
            <HImage
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <HHeader>Oops! Something Went Wrong</HHeader>
            <HPara>
              We are having some trouble to complete your request. Please try
              again.
            </HPara>
            <RetryButton onClick={retry}>Retry</RetryButton>
          </HfailureCont>
        )
      }}
    </WatchContext.Consumer>
  )
}

export default HomeFailure
