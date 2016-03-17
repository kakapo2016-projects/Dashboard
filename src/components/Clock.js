import React from 'react'


module.exports = React.createClass({

  getInitialState: function() {
     return {
       time: "12.30",
       am_pm: "AM"
     };
   },

  render: function () {

    function startTime () {
      let today = new Date();
      let h = today.getHours();
      let m = today.getMinutes();
      let s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById("app").innerHTML =
      h + ":" + m + ":" + s;
      let t = setTimeout(startTime, 500);
    }

    function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }

    return (
      <div>
        <h2>My Clock</h2>
        <p>{this.state.time}</p>
        <p>{this.state.am_pm}</p>
      </div>
    )
  }
});
