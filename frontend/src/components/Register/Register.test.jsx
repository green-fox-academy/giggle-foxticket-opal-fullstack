import React from 'react';
import Register from './Register';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../flux/store';

describe('Register Component', () => {
  it('render correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Register />
      </Provider>
    );
    expect(wrapper.contains(<Register />)).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
