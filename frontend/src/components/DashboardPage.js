import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFavourite, removeFavourite } from '../actions/ferries';
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
      {props.ferries.length ? props.ferries.map((ferry) => (
        <div key={ferry.ferry} className="card__container">
          <Link className="link" to={`/ferries/${ferry.ferry.toLowerCase()}`}>
            <Card {...ferry} />
          </Link>
          <div 
            className="card__fav-link"
            onClick={() => {
              ferry.favourite ? 
              props.dispatch(removeFavourite(ferry.ferry)) : 
              props.dispatch(addFavourite(ferry.ferry))
            }}
          >
          </div>
        </div>
      )) :
        <p className="header__no-favourites">Loading ferries...</p>}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  ferries: selectFerries(state.ferries, state.search),
  search: state.search
});

export default connect(mapStateToProps)(DashboardPage);
