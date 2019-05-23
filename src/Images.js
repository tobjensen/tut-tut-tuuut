import React from 'react';
import './Images.css';

const images = [
  {src: "https://via.placeholder.com/250", alt: "Ferry"},
  {src: "https://via.placeholder.com/250", alt: "Ferry"},
  {src: "https://via.placeholder.com/250", alt: "Ferry"},
  {src: "https://via.placeholder.com/250", alt: "Ferry"},
  {src: "https://via.placeholder.com/250", alt: "Ferry"}
]

function Images() {
  const items = images.map((item, i) => (
    <img key={i} src={item.src} alt={item.alt} />
  ))
  return (
      <div className='images'>
        {items}
      </div>
    );
}

export default Images;
