import { createStore, combineReducers } from 'redux';
import ferriesReducer from '../reducers/ferries';
import searchReducer from '../reducers/search';

export default () => {
  const store = createStore(
    combineReducers({
      ferries: ferriesReducer,
      search: searchReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
