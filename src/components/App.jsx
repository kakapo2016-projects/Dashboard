
import React from 'react'
import Welcome from './Welcome.jsx'
import Clock from './Clock'
import Search from './Search.jsx'
import Intention from './Intention.jsx'
import Timer from './Timer.jsx'
import Todo from './Todo.jsx'
import Moodometer from './Moodometer.jsx'

export default React.createClass({

  // ----- websockets ----- //

  getInitialState: function () {
    return {
      messages: [],
      avg: 0
    }
  },

  componentDidMount: function () {
    console.log("In App.jsx CDM Primus is:", Primus)
    this.socket = Primus.connect('ws://localhost:8080')
    console.log("Socket is: ", this.socket)
    this.socket.on('open', function () {
      //this.socket.send('message', { message: 'client connected' })
        this.socket.on('refresh',function ( avrg) {
          console.log('messages received from server in App.jsx - CDM', avrg)
          this.setState({ avg: avrg })
        }.bind(this))
      }.bind(this))
    },

  sendMessage: function (message) {
    console.log('message from App.jsx - SM', message)
    var id = ''
    this.socket.send('message', { message: message, id:id })
  },

  // ----- render ----- //

  render() {
  	console.log('app rendering')
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
          <Moodometer moodAverage={this.state.avg} sendOurMessage={this.sendMessage} />
          <Timer />
        </div>
      </div>

  )}

})
