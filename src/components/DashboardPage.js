import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from './Card';

const DashboardPage = (props) => (
  <div className="container top-padding">
    <h1>Dashboard Page</h1>
    <div>
      {props.ferries.map((ferry) => (
        <Link key={ferry.id} to={`/ferries/${ferry.label.toLowerCase()}`}>
          <Card {...ferry} />
        </Link>
      ))}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  ferries: state.ferries
});

export default connect(mapStateToProps)(DashboardPage);
