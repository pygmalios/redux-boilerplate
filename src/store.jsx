import { createStore } from 'redux';
import combinedReducers from 'reducers/index.jsx';

let store = createStore(combinedReducers);

store.subscribe(() => {
  console.log('Store updated', store.getState());
});

export default store;
