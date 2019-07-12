import { createStore, combineReducers } from 'redux';
import ferriesReducer from '../reducers/ferries';

export default () => {
  const store = createStore(
    combineReducers({
      ferries: ferriesReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
