import React from 'react';
import { shallow } from 'enzyme';

import Heading from './Heading';

describe('Heading', () => {
  test('should display a h1 with the supplied text', () => {
      const level = 1;
      const text = 'Desserts';

      const wrapper = shallow(
        <Heading level={level}>
          {text}
        </Heading>
      );

      expect(wrapper.hasClass('heading1')).toBe(true);
      expect(wrapper.text()).toEqual(text);
  });

  test('should display a h2 with the supplied text', () => {
      const level = 2;
      const text = 'Pies and Cakes';

      const wrapper = shallow(
        <Heading level={level}>
          {text}
        </Heading>
      );

      expect(wrapper.hasClass('heading2')).toBe(true);
      expect(wrapper.text()).toEqual(text);
  });

  test('should display a h3 with the supplied text', () => {
      const level = 3;
      const text = 'Pies';

      const wrapper = shallow(
        <Heading level={level}>
          {text}
        </Heading>
      );

      expect(wrapper.hasClass('heading3')).toBe(true);
      expect(wrapper.text()).toEqual(text);
  });

  test('should display a h4 with the supplied text', () => {
      const level = 4;
      const text = 'Apple Pies';

      const wrapper = shallow(
        <Heading level={level}>
          {text}
        </Heading>
      );

      expect(wrapper.hasClass('heading4')).toBe(true);
      expect(wrapper.text()).toEqual(text);
  });

  test('should display a h5 with the supplied text', () => {
      const level = 5;
      const text = 'Granny Smith Apple Pies';

      const wrapper = shallow(
        <Heading level={level}>
          {text}
        </Heading>
      );

      expect(wrapper.hasClass('heading5')).toBe(true);
      expect(wrapper.text()).toEqual(text);
  });

  test('should display a h6 with the supplied text', () => {
      const level = 6;
      const text = 'Granny Smith Bourbon Apple Pie';

      const wrapper = shallow(
        <Heading level={level}>
          {text}
        </Heading>
      );

      expect(wrapper.hasClass('heading6')).toBe(true);
      expect(wrapper.text()).toEqual(text);
  });
});
