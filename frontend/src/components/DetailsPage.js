import React from 'react';
import { connect } from 'react-redux';
import { addFavourite, removeFavourite } from '../actions/ferries';
import Card from './Card';
import MapSmall from './MapSmall';

const DetailsPage = (props) => {
	if (props.ferry) {
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
        <div className="card__container">
  	      <Card {...props.ferry} details={true}/>
          <div 
            className="card__fav-link"
            onClick={() => {
              props.ferry.favourite ? 
              props.dispatch(removeFavourite(props.ferry.ferry)) : 
              props.dispatch(addFavourite(props.ferry.ferry))
            }}
          >
          </div>
        </div>
	    </div>
	  )
	} else {
		return (
			<div className="container top-padding">
				<p className="header__no-favourites">Loading ferry...</p>
			</div>
		)
	}
};

const mapStateToProps = (state, props) => ({
  ferry: state.ferries.find((ferry) => (
    ferry.ferry.toLowerCase() === props.match.params.ferry
  ))
});

export default connect(mapStateToProps)(DetailsPage);
