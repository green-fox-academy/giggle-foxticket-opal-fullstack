import React from 'react';
import Header from './Header';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../flux/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../flux/store';

it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
    ).toJSON();
  expect(tree).toMatchSnapshot();
});