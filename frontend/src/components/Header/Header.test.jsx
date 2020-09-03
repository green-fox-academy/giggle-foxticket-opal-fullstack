import React from 'react';
import Header from './Header';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../flux/store';

it('renders correctly', () => {
  const tree = renderer.create(<Provider store={store}><Header /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});