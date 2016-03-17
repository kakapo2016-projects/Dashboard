
import React from 'react'
import Welcome from './Welcome.jsx'
import Clock from './Clock'
import Search from './Search.jsx'
import Intention from './Intention.jsx'
import Moodometer from './Moodometer.jsx'

export default React.createClass({

  // ----- websockets ----- //

  getInitialState: function () {
    return {
      messages: []
    }
  },

  componentDidMount: function () {
    console.log("Primus is:", Primus)
    this.socket = Primus.connect('ws://localhost:8080')
    this.socket.on('open', function () {
      this.socket.send('message', { message: 'client connected' })
      
      this.socket.on('refresh',function ( messages) {
        console.log('messages from App.jsx - CDM', messages)
        this.setState({ messages: messages })
      }.bind(this))
    
    }.bind(this))


  },

  sendMessage: function (message) {
    console.log('message from App.jsx - SM', message)
    this.socket.send('message', { message: message })
    
  },

  // ----- ----- //

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
	    <Moodometer  sendOurMessage={this.sendMessage} />
	  </div>
	</div>
   )
  }
})
