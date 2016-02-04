import { combineReducers } from 'redux';

import entity from 'reducers/entity.jsx';
import app from 'reducers/components/app.jsx';

let combinedReducers = combineReducers({
  entity: entity,
  app: app
})

export default combinedReducers
