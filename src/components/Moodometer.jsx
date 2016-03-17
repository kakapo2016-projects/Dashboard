import React from 'react';

module.exports = React.createClass({

  getInitialState: function () {
    // set state to button 3
    return {}
  },

  handleChange: function () {
    // do event handling
    // let value = this.refs.input.value   
    alert("Here goes...") 
    this.props.sendOurMessage("Hello Ash")
  },

  render:   function () {
    let msg = this.props.msg
    return (
      <div className="moodometer">
        <form >
          // <input type="radio" name="mood" value="1" onChange={ this.WRITETHISHANDLER} checked={this.IDONTKNOWWHATTHISMEANS} />
          <input type="radio" name="mood" value="2" />
          <input type="radio" name="mood" value="3" />
          <input type="radio" name="mood" value="4" />
          <input type="radio" name="mood" value="5" />
        </form>
        <div>Moodometer says Hi</div>
        <button type="button" onClick={ this.handleChange}>Click Me!</button>
      </div>
    )
  }
})