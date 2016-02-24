import { actions } from 'actions/index.jsx';

let defaultState = {
  test: 5
};

export default (state = defaultState, action) => {

  let nextState = Object.assign({}, state);

  console.log('CONTAINERS#APP# action', action);

  switch(action.type) {

    default:
      return nextState;
  }
}
