import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())
import { mount, render, shallow } from 'enzyme'
import Search from '../../src/components/Search.jsx'

describe('<Search />', () => {
  it('has a div with class of search', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.find('div.search')).to.have.length(1)
  })
  it('has an iframe with a duckduckgo search box', () => {
    const wrapper = shallow(<Search />)
    expect(wrapper.contains([<iframe src="https://duckduckgo.com/search.html?prefill=Search DuckDuckGo" style={{margin: 0},{padding: 0},{width: 408},{height: 40}} frameborder="0"></iframe>])).to.equal(true)
  })
})
