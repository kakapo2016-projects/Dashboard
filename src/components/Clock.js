import React from 'react'

var SetIntervalMixin = {
componentWillMount: function() {
  this.intervals = [];
},
setInterval: function() {
  this.intervals.push(setInterval.apply(null, arguments));
},
componentWillUnmount: function() {
  this.intervals.forEach(clearInterval);
}
};

module.exports = React.createClass({


mixins:[SetIntervalMixin],
  getInitialState: function() {
     return {
       time: "",
       am_pm: ""
     };
   },
   componentDidMount: function() {
     this.setInterval(this.startTime)
   },
  //  checkTime: function(i) {
  //     if (i < 10) {i = "0" + i.toString()};  // add zero in front of numbers < 10
  //     return i;
  // },
   startTime: function () {
     let today = new Date();
     let h = today.getHours();
     let m = today.getMinutes();
     let s = today.getSeconds();
     console.log(h, m, s)
     if (m < 10) {m = "0" + m.toString()}
     if (s < 10) {s = "0" + s.toString()}
    //  m = checkTime(m);
    //  s = checkTime(s);
     this.setState({time: h + ":" + m + ":" + s})
     console.log(s)
     // document.getElementById("app").innerHTML =
     // h + ":" + m + ":" + s;
    //  let t = setTimeout(startTime, 500);
   },

  render: function () {

    return (
      <div className="Clock">
        <p>{this.state.time} {this.state.am_pm}</p>
      </div>
    )
  }
});
