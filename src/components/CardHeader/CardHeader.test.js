import React from 'react';
import { shallow } from 'enzyme';

import CardHeader from './CardHeader';

describe('CardHeader', () => {
  test('should display it children', () => {
      const wrapper = shallow(
        <CardHeader>
          <div>Title</div>
          <div>Author</div>
        </CardHeader>
      );

      expect(wrapper.children()).toHaveLength(2);
  });

  test('should have the appropriate class', () => {
      const wrapper = shallow(
        <CardHeader>
          <div>Title</div>
          <div>Author</div>
        </CardHeader>
      );

      expect(wrapper.hasClass('card-header')).toBe(true);
  });
});
