import React from 'react';
import PropTypes from 'prop-types';

/** Use as the main child inside a table to format its content as a table body */
function TableBody({ children }) {
  return (
    <tbody className="recipe-table-body">
      {children}
    </tbody>
  );
}

TableBody.propTypes = {
  /** Content to display inside the table body */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default TableBody;
