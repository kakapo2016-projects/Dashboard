import React from 'react';

module.exports = React.createClass({
  render:   function () {
    let msg = this.props.msg
    return (
      <div className="moodometer">
        <form >
          <input type="radio" name="mood" value="1" />
          <input type="radio" name="mood" value="2" />
          <input type="radio" name="mood" value="3" />
          <input type="radio" name="mood" value="4" />
          <input type="radio" name="mood" value="5" />
        </form>
        <div>Moodometer says Hi</div>
      </div>
    )
  }
})