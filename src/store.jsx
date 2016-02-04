import { createStore } from 'redux';
import combinedReducers from 'reducers/index.jsx';

let store = createStore(combinedReducers);

export default store;
