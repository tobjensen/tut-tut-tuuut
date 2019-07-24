import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import ferriesReducer from '../reducers/ferries';
import searchReducer from '../reducers/search';

export default () => {
  const store = createStore(
    combineReducers({
      ferries: ferriesReducer,
      search: searchReducer
    }),
    applyMiddleware(ReduxThunk)
  );
  return store;
};
