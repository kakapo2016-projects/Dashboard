import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

chai.use(chaiEnzyme())
import { mount, render, shallow } from 'enzyme'

import Intention from '../../src/components/Intention.jsx'
