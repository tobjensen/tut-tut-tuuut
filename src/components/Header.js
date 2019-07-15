import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateFerryData } from '../actions/ferries';

const Header = (props) => (
  <header className="header">
    <div className="container header__content">
      <Link to='/' className="header__logo-link">
        <h2 className="header__logo">TUTTUT<span className="header__logo-bold">TUUUUT</span></h2>
      </Link>
      <div className="header__refresh" onClick={() => {
        props.dispatch(updateFerryData())
      }}>
        <i className="fas fa-sync"></i>
      </div>
    </div>
  </header>
);

export default connect()(Header);