import React from 'react';

const Card = (props) => (
  <div>
    Card Component - {props.ferry.id} - {props.ferry.label}
  </div>
);

export default Card;
