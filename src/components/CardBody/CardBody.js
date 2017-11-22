import React from 'react';
import PropTypes from 'prop-types';

/** Use as the main child inside a card to format its content as a card body */
function CardBody({ children }) {
  return (
    <div className="card-body">
      {children}
    </div>
  );
}

CardBody.propTypes = {
  /** Content to display inside the card header */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default CardBody;
