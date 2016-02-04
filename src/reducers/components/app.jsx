import { actions } from 'actions/index.jsx';

let defaultState = {
  input: ''
};

export default (state = defaultState, action) => {

  console.log('entity reducer', action);

  let nextState = Object.assign({}, state);

  switch(action.type) {

    case actions.COMPONENT.APP.INPUT.CHANGE: {
      nextState.input = action.parameter.value
      return nextState;
    }

    default:
      return nextState;
  }
}
