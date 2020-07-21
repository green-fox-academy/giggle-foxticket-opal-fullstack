import React from 'react';
import renderer from 'react-test-renderer';
import LandingPage from './LandingPage';
import { MemoryRouter } from 'react-router';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
