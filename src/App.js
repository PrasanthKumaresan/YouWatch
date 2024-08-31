import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'
import WatchContext from './context/WatchContext'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoDetails from './components/VideoDetails'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isHamClicked: false,
    isDark: false,
    savedList: [],
  }

  hamClickCheck = () => {
    this.setState(prevState => ({
      isHamClicked: !prevState.isHamClicked,
    }))
  }

  darkToggle = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  toggleSave = list => {
    const {savedList} = this.state
    if (savedList.includes(list)) {
      const filtered = savedList.filter(each => each.id !== list.id)
      this.setState(prevState => ({
        savedList: filtered,
      }))
    } else {
      this.setState(prevState => ({
        savedList: [...prevState.savedList, list],
      }))
    }
  }

  render() {
    const {isHamClicked, isDark, savedList, isLike, isDislike, isSaved} =
      this.state
    return (
      <WatchContext.Provider
        value={{
          isHamClicked,
          isDark,
          hamClickCheck: this.hamClickCheck,
          darkToggle: this.darkToggle,
          savedList,
          toggleSave: this.toggleSave,
          isDislike,
          isLike,
          videoDisLiked: this.videoDisLiked,
          videoLiked: this.videoLiked,
          isSaved,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </WatchContext.Provider>
    )
  }
}

export default App
