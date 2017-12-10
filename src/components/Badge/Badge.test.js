import React from 'react';
import { shallow } from 'enzyme';

import Badge from './Badge';

describe('Badge', () => {
  test('should display it children', () => {
      const wrapper = shallow(
        <Badge>
          42
        </Badge>
      );

      expect(wrapper.children()).toHaveLength(1);
  });

  test('should have the appropriate class', () => {
      const wrapper = shallow(
        <Badge>
          Sugar
        </Badge>
      );

      expect(wrapper.hasClass('badge')).toBe(true);
  });
});
