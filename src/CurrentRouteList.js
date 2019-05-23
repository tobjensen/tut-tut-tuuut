import React from 'react';
import './CurrentRouteList.css';

const stops = [
  {stop: "Mosman Bay Wharf", eta: "Now"},
  {stop: "Old Cremorne", eta: "5 min"},
  {stop: "South Mosman", eta: "7 min"},
  {stop: "Cremorne Point", eta: "12 min"},
  {stop: "Circular Quay", eta: "20 min"}
]

class CurrentRouteList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const rows = stops.length;
    const items = stops.map((item) => (
      <>
        <p className={rows === 1 ? "eta single" : "eta"}>{item.eta}</p>
        <p className="wharf">{item.stop}</p>
      </>
    ));
    return (
      <div className={this.props.className} style={{gridTemplateRows: `repeat(${rows}, 3em)`}}>
        {items}
      </div>
    );
  }
}

export default CurrentRouteList;
