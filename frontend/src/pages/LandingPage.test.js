import React from 'react';
import { render } from '@testing-library/react';
import LandingPage from './LandingPage';

test('renders learn react link', () => {
  const { getByText } = render(<LandingPage />);
  const linkElement = getByText(/I am the landing page!/i);
  expect(linkElement).toBeInTheDocument();
});
