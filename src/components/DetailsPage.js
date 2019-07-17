import React from 'react';
import { connect } from 'react-redux';
import { addFavourite, removeFavourite } from '../actions/ferries';
import Card from './Card';
import MapSmall from './MapSmall';

const DetailsPage = (props) => {
  return (
    <div className="container top-padding">
	    <div className="page-top">
	      <h1>🕵🏻‍♂️ Details</h1>
	      <button 
	      	className={`details__favourite-button ${props.ferry.favourite ? 'fav' : ''}`}
	      	onClick={() => {
	      		props.ferry.favourite ? 
	      		props.dispatch(removeFavourite(props.ferry.ferry)) : 
	      		props.dispatch(addFavourite(props.ferry.ferry))
	      		props.history.push("/favourites")
	      	}}
	      >
	      	<i className="far fa-heart"></i>
	      	{props.ferry.favourite ? 'Un-favourite' : 'Favourite'}
	      </button>
	  	</div>
      <Card {...props.ferry} details={true}/>
    </div>
  )
};

const mapStateToProps = (state, props) => ({
  ferry: state.ferries.find((ferry) => (
    ferry.ferry.toLowerCase() === props.match.params.ferry
  ))
});

export default connect(mapStateToProps)(DetailsPage);
