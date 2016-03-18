import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())
import { mount, render, shallow } from 'enzyme'

import Intention from '../../src/components/Intention.jsx'

describe('<Intention />', () => {
  it('has an input box to add intention', () => {
    const wrapper = shallow(<Intention />)
    expect(wrapper.find('div.intention')).to.be.length(1)
  })
  it('has an intention question', () => {
    const wrapper = shallow(<Intention />)
    expect(wrapper.find('p.intentionquestion')).to.be.length(1)
  })
  it('has a place to display the intention', () => {
    const wrapper = shallow(<Intention />)
    expect(wrapper.find('p.intentionresult')).to.be.length(1)
  })
  it('the entered intention is displayed', () => {
    //arrange
    const wrapper = mount(<Intention />)
    var input = wrapper.find('input')
    const event = { key: 'Enter', keyCode: 13, which: 13 }
    var expected = 'test intention'
    //action
    input.get(0).value = expected
    input.simulate('keyPress', event)
    //assert
    let output = wrapper.find('p.intentionresult').text()
    expect(output).to.equal('Your intention for today is test intention')
  })
})
