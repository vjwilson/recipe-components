import React from 'react';
import { shallow } from 'enzyme';

import MagnifyingGlassIcon from './MagnifyingGlassIcon';

describe('MagnifyingGlassIcon', () => {
  test('should display an SVG magnifying glass icon', () => {
      const wrapper = shallow(
        <MagnifyingGlassIcon />
      );

      const icon = wrapper.find('.icon');

      expect(icon.hasClass('magnifying-glass-icon')).toBe(true);
  });
});
