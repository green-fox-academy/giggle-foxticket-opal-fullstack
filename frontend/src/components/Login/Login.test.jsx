import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Login Component', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    expect(wrapper.contains(<Login />)).toBe(true);
  });
});
