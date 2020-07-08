import React from 'react';
import useCustomForm from './useCustomForm';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<useCustomForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
