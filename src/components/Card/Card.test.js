import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card';

describe('Card', () => {
  test('should display it children', () => {
      const wrapper = shallow(
        <Card>
          <div>Ingredients</div>
          <div>Directions</div>
        </Card>
      );

      expect(wrapper.children()).toHaveLength(2);
  });

  test('should have the appropriate class', () => {
      const wrapper = shallow(
        <Card>
          <div>Ingredients</div>
          <div>Directions</div>
        </Card>
      );

      expect(wrapper.hasClass('card')).toBe(true);
  });
});
