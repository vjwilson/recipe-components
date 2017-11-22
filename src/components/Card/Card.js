import React from 'react';
import PropTypes from 'prop-types';

/** Display a distinct piece of content in a card format */
function Card({ children }) {
  return (
    <article className="card">
      {children}
    </article>
  );
}

Card.propTypes = {
  /** Content to display inside the card */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Card;
