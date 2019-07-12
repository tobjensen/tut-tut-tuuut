import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <Link to="/" className="header">
    <header className="container">
      <h2 className="header__logo">TUTTUT<span className="header__logo-bold">TUUUUT</span></h2>
    </header>
  </Link>
);

export default Header;