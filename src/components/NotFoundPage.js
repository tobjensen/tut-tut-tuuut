import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="container top-padding">
    <h1>404 - <Link to="/">Go home</Link></h1>
  </div>
);

export default NotFoundPage;
