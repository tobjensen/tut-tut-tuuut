import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import DetailsPage from '../components/DetailsPage';
import FavouritesPage from '../components/FavouritesPage';
import Header from '../components/Header';
import LoveLetterPage from '../components/LoveLetterPage';
import MapPage from '../components/MapPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true}/>
        <Route path="/ferries/:ferry" component={DetailsPage} exact={true}/>
        <Route path="/ferries/:ferry/loveletter" component={LoveLetterPage} />
        <Route path="/favourites" component={FavouritesPage} />
        <Route path="/map" component={MapPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
