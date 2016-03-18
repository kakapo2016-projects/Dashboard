
import React from 'react'
import Welcome from './Welcome.jsx'
import Clock from './Clock'
import Search from './Search.jsx'
import Intention from './Intention.jsx'
import Todo from './Todo.jsx'

export default React.createClass({
  render() {
    return(
<div id='app' className="row">
  <div className="col-md-12 head">
    <div class="page-header">
      <h1>Dashr <small>Personal dashboard</small></h1>
    </div>
  </div>
  <div className="col-md-3">
    <Todo />
  </div>
  <div className="col-md-6">
    <Welcome />
    <Intention />
    <Clock />
    <Search />

  </div>
</div>)
  }
})
