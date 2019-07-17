import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import selectFavourites from '../selectors/favourites';
import Card from './Card';

const FavouritesPage = (props) => (
  <div className="container top-padding">
    <div className="page-top">
      <h1><i className="fas fa-heart card__fav"></i>Favourites</h1>
    </div>
    <div>
      {props.ferries.length ? 
        props.ferries.map((ferry) => (
        <Link className="link" key={ferry.ferry} to={`/ferries/${ferry.ferry.toLowerCase()}`}>
          <Card {...ferry} />
        </Link>
      )) :
        <p className="header__no-favourites">Oh no! No favourites...</p>}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  ferries: selectFavourites(state.ferries)
});

export default connect(mapStateToProps)(FavouritesPage);
