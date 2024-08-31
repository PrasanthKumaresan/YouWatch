import React from 'react'

const WatchContext = React.createContext({
  isHamClicked: '',
  hamClickCheck: () => {},
  isDark: '',
  darkToggle: () => {},
  savedList: [],
})

export default WatchContext
