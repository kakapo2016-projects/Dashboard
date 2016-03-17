import React from 'react';
import ToggleDisplay from 'react-toggle-display';
import LocalStorageMixin = 'react-localstorage';


module.exports = React.createClass({
  displayName: 'Welcome',
  mixins: [LocalStorageMixin],
  getInitialState: function () {
    //sets initial state using if depending on local storage
  },
  handleChange: function (e) {
    // adds name to local storage
    // sets state using name from local storage
    this.setState({isName: !this.state.isName})
  },
  handleToggle: function () {
    this.setState({isName: !this.state.isName})
  },
  render: function () {
    <div className = "welcome">
      <ToggleDisplay show={this.state.isName}
        <p>Welcome {this.state.name}<button type="button" className="btn btn-default btn-xs" onClick={this.handleToggle}>Change</button></p>
      </ToggleDisplay>
      <ToggleDisplay show={!this.state.isName}>
        <form>
          <input type="text">
          <button type="button" className="btn btn-default btn-md" onClick = {this.handleChange}>Submit</button>
        </form>
      </ToggleDisplay
    </div>
  }
})