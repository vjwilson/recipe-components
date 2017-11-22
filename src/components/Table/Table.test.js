import React from 'react';
import { shallow } from 'enzyme';

import Table from './Table';

describe('Table', () => {
  test('should display it children', () => {
      const wrapper = shallow(
        <Table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Leroy Jenkins</td>
            </tr>
          </tbody>
        </Table>
      );

      expect(wrapper.children()).toHaveLength(2);
  });

  test('should have the appropriate class', () => {
      const wrapper = shallow(
        <Table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Leroy Jenkins</td>
            </tr>
          </tbody>
        </Table>
      );

      expect(wrapper.hasClass('recipe-table')).toBe(true);
  });
});
