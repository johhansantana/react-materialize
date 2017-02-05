/* global describe, context, it, expect, sinon, before, after */

import React from 'react';
import { shallow, mount } from 'enzyme';
import Tooltip from '../src/Tooltip';

describe('Tooltip', () => {
  const options = {
    delay: 400,
    tooltip: 'help',
    position: 'right',
    html: false
  };

  const children = <p>Hover me!</p>;
  const component = <Tooltip options={options}>{children}</Tooltip>;

  context('shallow', () => {
    const wrapper = shallow(component);

    it('renders a child', () => {
      expect(wrapper.html()).to.equal('<p>Hover me!</p>');
    });
  });

  context('mounted', () => {
    let stub;

    before(function () {
      stub = sinon.stub($.fn, 'tooltip');
    });

    after(function () {
      stub.restore();
    });

    it('invokes tooltip function from materialize passing options', () => {
      mount(component);
      expect(stub.calledWith(options)).to.equal(true);
    });
  });
});
