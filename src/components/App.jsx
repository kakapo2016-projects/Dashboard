
import React from 'react'
import Welcome from './Welcome.jsx'
import Clock from './Clock'
import Search from './Search.jsx'
import Intention from './Intention.jsx'

export default React.createClass({
  render() {
    return(
      <div id='app' className="row">
        <div className="header">
          <h1 className="header col-md-12">THIS IS A PASSING TEST</h1>
        </div>
        <div className="col-md-6 col-md-offset-3">
          <Intention />
          <Clock />
          <Search />
        </div>
      </div>)
  }
})
