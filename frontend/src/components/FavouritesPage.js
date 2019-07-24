import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFavourite, removeFavourite } from '../actions/ferries';
import selectFavourites from '../selectors/favourites';
import Card from './Card';

const FavouritesPage = (props) => (
  <div className="container top-padding">
    <div className="page-top">
      <h1><i className="fas fa-heart card__fav"></i>Favourites</h1>
    </div>
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
        <p className="header__no-favourites">Oh no! No favourites...</p>}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  ferries: selectFavourites(state.ferries)
});

export default connect(mapStateToProps)(FavouritesPage);
