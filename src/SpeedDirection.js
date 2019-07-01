import React from 'react';
import './SpeedDirection.css';

class SpeedDirection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="speed-direction">
        <h4>{this.props.speed}</h4>
        <h4>{this.props.heading}</h4>
      </div>
      );
  }
}

export default SpeedDirection;
