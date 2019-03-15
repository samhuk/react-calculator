import React from 'react'

// components
import Header from './header'
import Body from './body'

// styles
import 'client/_content/standard.scss'

export const App = () => (
  <React.Fragment>
    <Header />
    <Body />
  </React.Fragment>
)

export default App
