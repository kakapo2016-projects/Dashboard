
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

	<div id='app' className="row">
	  <div className="col-md-12 head">
	    <div class="page-header">
	      <h1>Dashr <small>Personal dashboard</small></h1>
	    </div>
	  </div>
	  <div className="col-md-6 col-md-offset-3">
	    <Welcome />
	    <Intention />
	    <Clock />
	    <Search />
	    <Moodometer />
	  </div>
	</div>
   )
  }
})
