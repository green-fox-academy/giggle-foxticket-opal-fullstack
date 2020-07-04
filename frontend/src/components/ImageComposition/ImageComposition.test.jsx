import React from 'react';
import ImageComposition from './ImageComposition';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<ImageComposition />).toJSON();
  expect(tree).toMatchSnapshot();
});
