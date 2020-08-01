import React from 'react';
import AdminTicket from './Ticket';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <AdminTicket title="Hello" description="bla bla" iconName="FaBeer" />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
