
import React from 'react'
import Clock from './Clock'
import Search from './Search.jsx'
import Intention from './Intention.jsx'

export default React.createClass({
  render() {
    return(
      <div id='app' className="row">
        <h1 className="header col-md-12">THIS IS A PASSING TEST</h1>
        <div className="col-md-6 col-md-offset-3">
          <Intention />
          <Clock />
          <Search />
        </div>
      </div>)
  }
})
