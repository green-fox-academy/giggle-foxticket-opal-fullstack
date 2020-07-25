import React from 'react';
import AdminTicketTypes from './AdminTicketTypes';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<AdminTicketTypes />).toJSON();
  expect(tree).toMatchSnapshot();
});
