import React from 'react';

module.exports = React.createClass({
  render:function () {
    return (
      <div className="search">
        <iframe src="https://duckduckgo.com/search.html?prefill=Search DuckDuckGo"frameBorder="0"></iframe>
      </div>
    )
  }
})
