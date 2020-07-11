import React from 'react';
import TicketTypes from './TicketTypes';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<TicketTypes />).toJSON();
  expect(tree).toMatchSnapshot();
});
