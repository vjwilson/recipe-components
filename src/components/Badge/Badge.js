import React from 'react';
import PropTypes from 'prop-types';

/** Badges help easily highlight an item, and add context */
function Badge({ children }) {
  return (
    <span className="badge">
      {children}
    </span>
  );
}

Badge.propTypes = {
  /** Content to display inside the badge */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Badge;
