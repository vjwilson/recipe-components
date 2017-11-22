import React from 'react';
import { shallow } from 'enzyme';

import TableHeader from './TableHeader';

describe('TableHeader', () => {
  test('should display it children', () => {
      const wrapper = shallow(
        <TableHeader>
          <tr>
            <th>Name</th>
          </tr>
         </TableHeader>
      );

      expect(wrapper.children()).toHaveLength(1);
  });

  test('should have the appropriate class', () => {
      const wrapper = shallow(
        <TableHeader>
          <tr>
            <th>Name</th>
          </tr>
         </TableHeader>
      );

      expect(wrapper.hasClass('recipe-table-header')).toBe(true);
  });
});
