import React from 'react';
import './FerryHeading.css';

class FerryHeading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ferry-heading">
        <h1>{this.props.ferry}</h1>
        <h2>{this.props.class}</h2>
      </div>
    );
  }
}

export default FerryHeading;
