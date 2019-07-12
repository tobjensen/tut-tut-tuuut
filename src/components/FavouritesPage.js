import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import selectFavourites from '../selectors/favourites';
import Card from './Card';

const FavouritesPage = (props) => (
  <div className="container top-padding">
    <h1>Favourites Page</h1>
    <div>
      {props.ferries.map((ferry) => (
        <Link key={ferry.ferry} to={`/ferries/${ferry.ferry.toLowerCase()}`}>
          <Card {...ferry} />
        </Link>
      ))}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  ferries: selectFavourites(state.ferries)
});

export default connect(mapStateToProps)(FavouritesPage);
