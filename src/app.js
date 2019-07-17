import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { fetchFerryData, addFavourite } from './actions/ferries';
import getData from './data/ferries';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(fetchFerryData());
store.dispatch(addFavourite('Friendship'));
store.dispatch(addFavourite('Alexander'));
store.dispatch(fetchFerryData());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
