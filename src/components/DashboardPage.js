import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

const DashboardPage = (props) => (
  <div className="container top-padding">
    <h1>Dashboard Page</h1>
    <div>
      {props.ferries.map((ferry) => (
        <Card key={ferry.id} {...ferry} />
      ))}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  ferries: state.ferries
});

export default connect(mapStateToProps)(DashboardPage);
