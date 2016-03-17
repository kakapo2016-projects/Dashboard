import React from 'react';

module.exports = React.createClass({

  getInitialState: function () {
    // set state to button 3
    return {}
  },

  handleChange: function (value) {
    // do event handling
    // let value = this.refs.input.value   
    alert("Here goes...") 
    this.props.sendOurMessage("The mood is " + value)
  },

  render:   function () {
    let msg = this.props.msg

    return (
      <div className="moodometer">
        <form >
          <input type="radio" name="mood" value="1" onChange={ this.handleChange(1)} />
          <input type="radio" name="mood" value="2" onChange={ this.handleChange(2)} />
          <input type="radio" name="mood" value="3" onChange={ this.handleChange(3)} />
          <input type="radio" name="mood" value="4" onChange={ this.handleChange(4)} />
          <input type="radio" name="mood" value="5" onChange={ this.handleChange(5)} />
        </form>
        <div>Moodometer says {msg}</div>
        <button type="button" onClick={ this.handleChange}>Click Me!</button>
      </div>
    )
  }
})