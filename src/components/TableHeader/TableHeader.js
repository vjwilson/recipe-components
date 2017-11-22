import React from 'react';
import PropTypes from 'prop-types';

/** Use as the first child inside a table to format its content as a table header */
function TableHeader({ children }) {
  return (
    <thead className="recipe-table-header">
      {children}
    </thead>
  );
}

TableHeader.propTypes = {
  /** Content to display inside the table header */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default TableHeader;
