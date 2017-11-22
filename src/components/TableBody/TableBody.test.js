import React from 'react';
import { shallow } from 'enzyme';

import TableBody from './TableBody';

describe('TableBody', () => {
  test('should display it children', () => {
      const wrapper = shallow(
        <TableBody>
          <tr>
            <td>Leroy Jenkins</td>
          </tr>
        </TableBody>
      );

      expect(wrapper.children()).toHaveLength(1);
  });

  test('should have the appropriate class', () => {
      const wrapper = shallow(
      <TableBody>
          <tr>
            <td>Leroy Jenkins</td>
          </tr>
        </TableBody>
      );

      expect(wrapper.hasClass('recipe-table-body')).toBe(true);
  });
});
