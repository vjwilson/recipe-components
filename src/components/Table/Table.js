import React from 'react';
import PropTypes from 'prop-types';

/** Wrap content in a table */
function Table({ children }) {
  return (
    <table className="recipe-table">
      {children}
    </table>
  );
}

Table.propTypes = {
  /** Content to display inside the table */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Table;
