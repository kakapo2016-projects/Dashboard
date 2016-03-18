import React from 'react';

module.exports = React.createClass({

  getInitialState: function () {
    // set state to button 3
    return {}
  },

  handleChange: function (value) {
    return function () {
      this.props.sendOurMessage(value)
    }.bind(this)
  },

  render:   function () {
    var mood = this.props.moodAverage

    return (
      <div className="moodometer">
        <form >
          1<input type="radio" name="mood" value="1" onChange={ this.handleChange(1)} />
          <input type="radio" name="mood" value="2" onChange={ this.handleChange(2)} />
          <input type="radio" name="mood" value="3" onChange={ this.handleChange(3)} />
          <input type="radio" name="mood" value="4" onChange={ this.handleChange(4)} />
          <input type="radio" name="mood" value="5" onChange={ this.handleChange(5)} />
          <input type="radio" name="mood" value="1" onChange={ this.handleChange(6)} />
          <input type="radio" name="mood" value="2" onChange={ this.handleChange(7)} />
          <input type="radio" name="mood" value="3" onChange={ this.handleChange(8)} />
          <input type="radio" name="mood" value="4" onChange={ this.handleChange(9)} />
          <input type="radio" name="mood" value="5" onChange={ this.handleChange(10)} />
          <input type="radio" name="mood" value="5" onChange={ this.handleChange(11)} />11
        </form>
        <div>Moodometer says {mood}</div>
      </div>
    )
  }
})