import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import Join from '../join-components/Join'
import Chat from '../chat-components/Chat'
const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join}></Route>
      <Route path="/chat" exact component={Chat}></Route>
    </Router>
  )
}

export default App
