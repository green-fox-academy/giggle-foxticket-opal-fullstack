import React from 'react';
import Register from './Register';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../flux/store';
import renderer from 'react-test-renderer';

describe('Register Component', () => {
  const MockRegister = (
    <Provider store={store}>
      <Register />
    </Provider>
  );

  it('should render correctly', () => {
    const wrapper = shallow(MockRegister);
    expect(wrapper.contains(<Register />)).toBe(true);
  });

  it('should match the snapshot', () => {
    const tree = renderer.create(MockRegister).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
