import React from 'react';

module.exports = React.createClass({
  render:   function () {
    let msg = this.props.msg
    return (
      <form action="">
        <input type="radio" name="mood" value="1"> 1 
        <input type="radio" name="mood" value="2"> 2 
        <input type="radio" name="mood" value="3"> 3 
        <input type="radio" name="mood" value="4"> 4 
        <input type="radio" name="mood" value="5"> 5 
      </form>
      <div>Moodometer says { msg }</div>
    )
  }
}