import React from 'react';

module.exports = React.createClass({
  render:function () {
    return (
      <div className="search">
        <iframe src="https://duckduckgo.com/search.html?prefill=Search DuckDuckGo" style={{margin: 0},{padding: 0},{width: 408},{height: 40}} frameborder="0"></iframe>

      </div>
    )
  }
})
