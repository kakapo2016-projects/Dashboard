
import React from 'react'
import Clock from './Clock'
import Search from './Search.jsx'
import Intention from './Intention.jsx'

export default React.createClass({
  render() {
    return(
      <div id='app'>
        <h2>THIS IS A PASSING TEST</h2>

        <Intention />
        <Clock />
        <Search />

      </div>)
  }
})
