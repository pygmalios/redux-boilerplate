import { combineReducers } from 'redux';

import entity from 'reducers/entity.jsx';
import app from 'reducers/components/app.jsx';
import { routeReducer } from 'react-router-redux';

let combinedReducers = combineReducers({
  entity: entity,
  app: app,
  routing: routeReducer
})

export default combinedReducers
