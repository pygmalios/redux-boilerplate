import { combineReducers } from 'redux';

import { routeReducer } from 'react-router-redux';

function reducer(reducerPath) {
  return require(`reducers/${reducerPath}.jsx`).default
}

let reducers = {
  containers: combineReducers({
    app: reducer('containers/app')
  }),
  routing: routeReducer
};

export default combineReducers(reducers)
