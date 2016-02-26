import { createStore, applyMiddleware } from 'redux';
import { createHistory } from 'history';
import { syncHistory } from 'react-router-redux';
import thunk from 'redux-thunk';
import combinedReducers from 'reducers/index.jsx';

const history = createHistory();
const createStoreWithMiddleware = applyMiddleware(syncHistory(history), thunk)(createStore);

const store = createStoreWithMiddleware(combinedReducers);

export { history, store };
