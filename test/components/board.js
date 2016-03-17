import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())
import { mount, render, shallow } from 'enzyme'

import {App} from '../../src/components/App.jsx'

describe ('<App />', () => {
   it ('clock renders without any props', () => {
     const wrapper = shallow(<Clock />)
    expect(wrapper).to.be.ok
   })
   it ('intention renders without any props', () => {
     const wrapper = shallow(<Intention />)
     expect(wrapper).to.be.ok
   })
   it ('moodometer renders without any props', () => {
     const wrapper = shallow(<Moodometer />)
     expect(wrapper).to.be.ok
   })

})
