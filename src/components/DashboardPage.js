import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/search';
import selectFerries from '../selectors/dashboard';
import Card from './Card';

const DashboardPage = (props) => (
  <div className="container top-padding">
    <div className="page-top">
      <h1>🛳 Dashboard</h1>
    </div>
    <input 
      className="search" 
      type="text" 
      placeholder="Search for ferry, class or route..."
      value={props.search.text}
      onChange={(e) => props.dispatch(setTextFilter(e.target.value))}
    />
    <div>
      {props.ferries.map((ferry) => (
        <Link className="link" key={ferry.ferry} to={`/ferries/${ferry.ferry.toLowerCase()}`}>
          <Card {...ferry} />
        </Link>
      ))}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  ferries: selectFerries(state.ferries, state.search),
  search: state.search
});

export default connect(mapStateToProps)(DashboardPage);
