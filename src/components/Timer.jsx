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

    mixins: [SetIntervalMixin],

    getInitialState: function() {
    return {seconds: 0};
    },
    componentDidMount: function() {
    this.setInterval(this.tick, 1000);
    },
    tick: function() {
    this.setState({seconds: this.state.seconds + 1});
    },

    render: function() {
      return (
      <div className="Timer">
        <p>
          You've been looking at this screen for {this.state.seconds} seconds.
        </p>
      </div>
      )
    }
});
