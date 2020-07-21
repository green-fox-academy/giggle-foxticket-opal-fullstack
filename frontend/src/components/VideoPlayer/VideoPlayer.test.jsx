import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './VideoPlayer';

it('renders correctly', () => {
  const tree = renderer.create(<VideoPlayer />).toJSON();
  expect(tree).toMatchSnapshot();
});
