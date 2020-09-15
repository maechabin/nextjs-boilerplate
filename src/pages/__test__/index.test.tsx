import React from 'react';
import { shallow } from 'enzyme';

import IndexPage from '../index';

describe('<IndexPage />', () => {
  it('should be created', () => {
    // act
    const wrapper = shallow(<IndexPage />);

    // assert
    expect(wrapper).toBeTruthy();
  });
});
