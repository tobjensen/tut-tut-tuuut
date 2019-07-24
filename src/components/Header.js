import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchFerryData } from '../actions/ferries';

const Header = (props) => (
  <header className="header">
    <div className="container header__content">
      <Link to='/' className="header__logo-link">
        <h2 className="header__logo">TUTTUT<span className="header__logo-bold">TUUUUT</span></h2>
      </Link>
      <div className="header__right-side">
        <NavLink exact to="/" activeClassName="selected">Dashboard</NavLink>
        <NavLink to="/favourites" activeClassName="selected">Favourites</NavLink>
        <NavLink to="/map" activeClassName="selected">Map</NavLink>
        <div className="header__refresh" onClick={() => {
          props.dispatch(fetchFerryData())
        }}>
          <i className="fas fa-sync"></i>
        </div>
      </div>
    </div>
  </header>
);

export default withRouter(connect()(Header));