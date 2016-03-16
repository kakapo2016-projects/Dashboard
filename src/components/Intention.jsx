import React from 'react';
import ToggleDisplay from 'react-toggle-display';


module.exports = React.createClass({
  handleChange: function () {
    // Adds contents of input field into text
    // Toggles from option 1 to option 2
  },
  handleToggle: function () {
    // Toggles state from option 2 to option 1
  },
  render:function () {
    return (
      <ToggleDisplay show={!this.state.isIntention}>
        // Option 1: Text, what is your intention for the day.
        // Input field, on enter, triggers handle change function
      </ToggleDisplay>

      <ToggleDisplay show={this.state.isIntention}>
        // Option 2: Text "Focus on [intention]"
        // Toggles on click
      </ToggleDisplay>
    )
  }
}