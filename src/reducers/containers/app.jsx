import { actions } from 'actions/index.jsx';

const defaultState = {
  test: 5,
};

export default (state = defaultState, action) => {
  const nextState = Object.assign({}, state);

  switch (action.type) {

    case actions['ENTITY_LOAD_START']: {
      nextState.test++;
      return nextState;
    }

    default:
      return nextState;
  }
};
