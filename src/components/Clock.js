//create component constructor
'use strict'
import React from 'react'


module.exports = React.createClass({

  render: function () {

    return (
        <div>
          <h2>My Clock</h2>


        <div>


      function displayTime() {
            const currentTime = new Date();
            const hours = currentTime.getHours();
            const minutes = currentTime.getMinutes();
            const seconds = currentTime.getSeconds();
            const am = "AM";
            if (seconds < 10) {
                seconds = "0" + seconds
            };

            if (minutes < 10) {
                minutes = "0" + minutes
            };

            if (hours < 10) {
                hours = "0" + hours
            };

            if (hours > 12) {
                hours = hours - 12;
                am = "PM";
            }

            if (hours === 0) {
                hours = 12;
            }

            const clockDiv = document.getElementById('clock');
            setInterval(displayTime, 1000);
            clockDiv.innerText = hours + ":" + minutes + ":" + seconds;
        }

      }
    });
