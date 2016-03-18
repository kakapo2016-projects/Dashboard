import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())
import { mount, render, shallow } from 'enzyme'

import App from '../../src/components/App.jsx'
import Intention from '../../src/components/Intention.jsx'
import Welcome from '../../src/components/Welcome.jsx'
import Moodometer from '../../src/components/Moodometer.jsx'
import Clock from '../../src/components/Clock.js'
import Search from '../../src/components/Search.jsx'

describe ('<App />', () => {
  xit ('renders h2', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('h2')).to.have.length(1)
  })
   it ('the clock renders without any props', () => {
     const wrapper = shallow(<App />)
     expect(wrapper.find(Clock)).to.have.length(1)
   })
   it ('intention renders without any props', () => {
     const wrapper = shallow(<App />)
     expect(wrapper.find(Intention)).to.have.length(1)
   })
   it ('moodometer renders', () => {
     const wrapper = shallow(<App />)
     expect(wrapper.find(Moodometer)).to.have.length(1)
   })
   xit ('moodometer renders with one prop', () => {
     const wrapper = shallow(<App />)
     expect(wrapper.find(Moodometer).props()).to.have.length(1)
   })

   it ('search renders without any props', () => {
     const wrapper = shallow(<App />)
     expect(wrapper.find(Search)).to.have.length(1)
   })
})
