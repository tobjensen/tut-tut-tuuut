import React from 'react';
import { connect } from 'react-redux';
import LoveLetterForm from './LoveLetterForm'

const LoveLetterPage = (props) => {
  if (props.ferry) {
    return (
      <div className="container top-padding">
        <div className="page-top">
          <h1>❤️ Write Love Letter to {props.ferry.ferry}</h1>
        </div>
        <LoveLetterForm {...props.ferry} onSubmit={(values) => console.log(values) } />
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

export default connect(mapStateToProps)(LoveLetterPage);
