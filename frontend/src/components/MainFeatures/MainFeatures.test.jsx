import React from 'react';
import MainFeatures from './MainFeatures';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<MainFeatures />).toJSON();
  expect(tree).toMatchSnapshot();
});
