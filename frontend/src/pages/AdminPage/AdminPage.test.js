import React from 'react';
import AdminPage from './AdminPage';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<AdminPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
