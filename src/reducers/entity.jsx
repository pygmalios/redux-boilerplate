import { actions } from 'actions/index.jsx';

let defaultState = {
  data: []
};

export default (state = defaultState, action) => {

  console.log('entity reducer', action);

  let nextState = Object.assign({}, state);

  switch(action.type) {

    case actions.ENTITY.ADD: {
      nextState.data.push(action.parameter);
      return nextState;
    }

    default:
      return nextState;
  }
}
