import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())
import { mount, render, shallow } from 'enzyme'

import Moodometer from '../../src/components/Moodometer.jsx'

describe ('<Moodometer />', () => {
  it('renders the Moodometer', () => {
    const wrapper = shallow(<Moodometer />)
    expect(wrapper.find('div.moodometer')).to.have.length(1)

  })
  xit('passes the props', () => {
    const wrapper = shallow(<Moodometer />);
    console.log('wrapper.props')
    //sendOurMessage={this.sendMessage}
  //  expect(wrapper.props().sendOurMessage).to.equal(.....);
  })

})
