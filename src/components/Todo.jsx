import React from 'react';
import ToggleDisplay from 'react-toggle-display';
import LocalStorageMixin from 'react-localstorage';

var style = {listStyleType: "none"}

module.exports = React.createClass({
  displayName: 'Welcome',
  // mixins: [LocalStorageMixin],
  getInitialState: function () {
    return {
      items: [],
      dones: [],
      inputValue: ""
    }
  },
  handleAdd: function (e) {
    if (e.key === 'Enter') {
      var arr = this.state.items
      console.log("items", arr)
      arr.push(e.target.value)
      this.setState({items: arr, inputValue: ""})
    }
  },
  handleChange: function (e) {
    this.setState({inputValue: e.target.value})
  },
  handleDone: function (e) {
    console.log("completed!", e.target.value)
    var array = this.state.items
    var itemDone = e.target.value
    var arrayDone = this.state.dones
    arrayDone.push(e.target.value)
    var index = array.indexOf(e.target.value)
    delete array[index]
    this.setState({items: array, dones: arrayDone})
  },

// DELETE ITEM

  render: function () {
    var items = this.state.items
    var itemsList = items.map(function(item){
      return <li><input type="submit" value={item} onClick={this.handleDone} /></li>;
    }.bind(this))
    var dones = this.state.dones
    var doneList = dones.map(function(done){
      return <li>{done}</li>;
    }.bind(this))
    return (
      <div className="Todo">
        <h2>To Do!</h2>
        <div className="Items">
          <ul style={style}>{itemsList}</ul>
        </div>
        <div className="Done">
          <ul style={style}>{doneList}</ul>
        </div>
        <div className="New">
          <input type="text" onKeyPress = {this.handleAdd} onChange = {this.handleChange} value = {this.state.inputValue}/>
        </div>
      </div>
    )
  }
})


