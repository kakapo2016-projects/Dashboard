import React from 'react'
import render from 'react-dom'
import App from './components/App'


domready( function () {
  render((
    <App />
  ), document.querySelector('#App'))
})
