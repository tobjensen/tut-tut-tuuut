import React from 'react';

const Stops = (props) => (
  <div 
    className={props.className} 
    style={{gridTemplateRows: `repeat(${props.stops.length}, 5rem)`}}
  >
    {props.stops.map((stop) => (
      <div key={stop.stop} className={props.stops.length === 1 ? "stops__stop single" : "stops__stop"}>
        <span className={props.stops.length === 1 ? "stops__eta single" : "stops__eta"}>{stop.eta}</span>
        <span className="stops__wharf">{stop.stop}</span>
      </div>
    ))}
  </div>
);

export default Stops;
