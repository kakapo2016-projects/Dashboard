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
       time: ""
     };
   },
   componentDidMount: function() {
     this.setInterval(this.startTime)
   },

   startTime: function () {
     let today = new Date();
     let h = today.getHours();
     let m = today.getMinutes();
     let s = today.getSeconds();
     let a = ""
     console.log(h, m, s)
     if (m < 10) {m = "0" + m.toString()}
     if (s < 10) {s = "0" + s.toString()}
     if (h > 12) {h = h-12; a = "pm"} else {a = "am"}
     this.setState({time: h + ":" + m + ":" + s + " " + a})
     console.log(s)
     // document.getElementById("app").innerHTML =
     // h + ":" + m + ":" + s;
    //  let t = setTimeout(startTime, 500);
   },

  render: function () {

    return (
      <div className="Clock">
        <p>{this.state.time}</p>
      </div>
    )
  }
});
