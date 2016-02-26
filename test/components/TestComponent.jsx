import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import TestComponent from '../../src/components/TestComponent.jsx';

describe('TestComponent', function() {
  it('should render out h1', function() {
    let renderer = ReactTestUtils.createRenderer();
    renderer.render(<TestComponent show={true}/>);
    let output = renderer.getRenderOutput();
    expect(output.type).toBe('div');
  });
});
