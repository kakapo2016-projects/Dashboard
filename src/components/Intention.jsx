import React from 'react';
import ToggleDisplay from 'react-toggle-display';


module.exports = React.createClass({
  getInitialState: function () {
    return {
      isIntention: false,
      value: ""
    }
  },
  handleKeyPress: function (e) {
    if (e.key === 'Enter') {
      this.setState({isIntention: !this.state.isIntention, value: e.target.value})
    }
  },
  handleToggle: function () {
    this.setState({isIntention: !this.state.isIntention})
  },
  render:function () {
    return (
      <div className="intention">
        <ToggleDisplay show={!this.state.isIntention}>
          <p className="intentionquestion">What is your intention for the day?</p>
          <input type="text" onKeyPress = {this.handleKeyPress} />
        </ToggleDisplay>
        <ToggleDisplay show={this.state.isIntention}>
          <p className="intentionresult" onClick={this.handleToggle}>
            Your intention for today is {this.state.value}
          </p>
        </ToggleDisplay>
      </div>
    )
  }
})
