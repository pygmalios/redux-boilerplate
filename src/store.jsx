import { createStore, applyMiddleware } from 'redux';
import { createHistory } from 'history';
import { syncHistory } from 'react-router-redux';
import thunk from 'redux-thunk';
import combinedReducers from 'reducers/index.jsx';

let history = createHistory();
let createStoreWithMiddleware = applyMiddleware(syncHistory(history), thunk)(createStore);

let store = createStoreWithMiddleware(combinedReducers);

export { history, store };
