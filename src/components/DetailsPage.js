import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

const DetailsPage = (props) => (
  <div className="container top-padding">
    <h1>Details Page</h1>
    <Card {...props.ferry}/>
  </div>
);

const mapStateToProps = (state, props) => ({
  ferry: state.ferries.find((ferry) => (
    ferry.label.toLowerCase() === props.match.params.ferry
  ))
});

export default connect(mapStateToProps)(DetailsPage);
