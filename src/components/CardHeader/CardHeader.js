import React from 'react';
import PropTypes from 'prop-types';

/** Use as the first child inside a card to format its content as a card header */
function CardHeader({ children }) {
  return (
    <header className="card-header">
      {children}
    </header>
  );
}

CardHeader.propTypes = {
  /** Content to display inside the card header */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default CardHeader;
