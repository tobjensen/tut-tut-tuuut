import React from 'react';
import './Images.css';

class Images extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const items = this.props.images.map((item, i) => (
      <img key={i} src={item} alt={this.props.ferry} />
    ));
    return (
        <div className='images'>
          {items}
        </div>
    );
  }
}

export default Images;
