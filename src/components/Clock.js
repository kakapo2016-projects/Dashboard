//create component constructor
'use strict'
import React from 'react'


module.exports = React.createClass({

  getInitialState: function() {
     return {
       time: "12.30",
       am_pm: "AM"
     };
   },

  render: function () {

    return (
        <div>
          <h2>My Clock</h2>
          <p>{this.state.time}</p>
          <p>{this.state.am_pm}</p>
        <div>

// set initial state...re displayTime mounted to clock


        }

      }
    });
