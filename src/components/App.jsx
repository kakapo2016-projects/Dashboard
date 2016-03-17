
import React from 'react'
import Welcome from './Welcome.jsx'
import Clock from './Clock'
import Search from './Search.jsx'
import Intention from './Intention.jsx'
import Moodometer from './Moodometer.jsx'

export default React.createClass({
  render() {
  	console.log('app rendering')
    return(
      <div id='app'>
        <h2>THIS IS A PASSING TEST</h2>
        <Welcome />
        <Intention />
        <Clock />
        <Search />
        <Moodometer />
      </div>)
  }
})
