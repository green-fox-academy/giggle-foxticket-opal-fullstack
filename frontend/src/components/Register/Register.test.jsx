import React from 'react';
import Register from './Register';
import renderer from 'react-test-renderer';

describe('test register component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Register />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
