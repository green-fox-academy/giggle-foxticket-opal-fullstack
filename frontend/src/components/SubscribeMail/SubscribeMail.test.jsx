import React from 'react';
import SubscribeMail from './SubscribeMail';
import renderer from 'react-test-renderer';

describe('test SubscribeMail component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SubscribeMail />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
