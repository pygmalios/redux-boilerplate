import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import localesReducer from './locales.jsx';

function reducer(reducerPath) {
  return require(`reducers/${reducerPath}.jsx`).default;
}

const reducers = {
  containers: combineReducers({
    app: reducer('containers/app'),
  }),
  routing: routeReducer,
  locales: localesReducer,
};


export default combineReducers(reducers);
