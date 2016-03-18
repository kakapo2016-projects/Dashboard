import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())
import { mount, render, shallow } from 'enzyme'
import Clock from '../../src/components/Clock.js'

describe('<Clock />', () => {
  it('renders the clock', () => {
    const wrapper = shallow(<Clock />)
    expect(wrapper.find('div.Clock')).to.have.length(1)
  })

})
