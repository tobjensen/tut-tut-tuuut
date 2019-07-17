import React from 'react';

const Images = (props) => (
  <div className={props.className}>
    {props.images.map((item, i) => <img key={i} src={item} alt="Ferry" />)}
  </div>
);

export default Images;
