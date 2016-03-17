import React from 'react'
import ReactDOM from 'react-dom'
import domready from 'domready'
import App from './components/App.jsx'

domready( function () {
  console.log('HERE!')
  ReactDOM.render(
    <App />, document.getElementById('app')
  )
})
