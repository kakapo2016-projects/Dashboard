import React from 'react';
import ToggleDisplay from 'react-toggle-display';
import LocalStorageMixin from 'react-localstorage';


module.exports = React.createClass({
  displayName: 'Welcome',
  mixins: [LocalStorageMixin],
  getInitialState: function () {
    return {
      isName: false,
      name: ""
    }
    //sets initial state using if depending on local storage
  },
  handleChange: function (e) {
    if (e.key === 'Enter') {
    // adds name to local storage
    // sets state using name from local storage
    this.setState({name:e.target.value, isName: !this.state.isName})
    }
  },
  handleToggle: function () {
    this.setState({isName: !this.state.isName})
  },
  render: function () {
    return (
      <div className = "welcome">
        <ToggleDisplay show={this.state.isName}>
          <p>Welcome {this.state.name}! <button type="button" className="btn btn-default btn-xs" onClick={this.handleToggle}>Change</button></p>
        </ToggleDisplay>
        <ToggleDisplay show={!this.state.isName}>
          <p>Who are you?</p>
          <form>
            <input type="text" onKeyPress = {this.handleChange} />
          </form>
        </ToggleDisplay>
      </div>
    )
  }
})
