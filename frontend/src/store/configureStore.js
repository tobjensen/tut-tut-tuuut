import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import ferriesReducer from '../reducers/ferries';
import searchReducer from '../reducers/search';
import { fetchFerryData, updateFerryData } from '../actions/ferries';

export default () => {
  const store = createStore(
    combineReducers({
      ferries: ferriesReducer,
      search: searchReducer
    }),
    applyMiddleware(ReduxThunk)
  );

  const localFerries = JSON.parse(localStorage.getItem('ferries'))
  store.dispatch(updateFerryData(localFerries))

  store.subscribe(() => {
	const json = JSON.stringify(store.getState()['ferries'])
	localStorage.setItem('ferries', json)
	})

  store.dispatch(fetchFerryData());

  return store;
};
