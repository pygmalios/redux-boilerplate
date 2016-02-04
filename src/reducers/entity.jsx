import { actions } from 'actions/index.jsx';

let defaultState = {
  data: []
};

export default (state = defaultState, action) => {

  let nextState = Object.assign({}, state);

  switch(action.type) {

    case actions.ENTITY.ADD: {
      nextState.data.push(action.parameter);
      return nextState;
    }

    case actions.ENTITY.REMOVE: {
      nextState.data.splice(action.parameter.index, 1);
      return nextState;
    }

    default:
      return nextState;
  }
}
