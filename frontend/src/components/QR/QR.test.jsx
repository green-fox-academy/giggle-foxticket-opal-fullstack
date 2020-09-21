import React from 'react';
import QR from './QR';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<QR id={2} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
