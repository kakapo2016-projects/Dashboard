import React from 'react';

module.exports = React.createClass({
  render:function () {
    return (
      <div className="search">
        <iframe src="https://duckduckgo.com/search.html?prefill=Search DuckDuckGo&focus=yes" style="overflow:hidden;margin:0;padding:0;width:408px;height:40px;" frameborder="0"></iframe>
      </div>
    )
  }
})
