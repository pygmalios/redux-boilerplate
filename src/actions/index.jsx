let actionCreators = {};

let actions = {
  ENTITY: {
    ADD: 'ADD_ENTITY'
  },
  COMPONENT: {
    APP: {
      INPUT: {
        CHANGE: 'CHANGE_INPUT_APP_COMPONENT'
      }
    }
  }
};

actionCreators[actions.ENTITY.ADD] = function(parameter) {
  return {
    type: actions.ENTITY.ADD,
    parameter: parameter
  }
}

actionCreators[actions.COMPONENT.APP.INPUT.CHANGE] = function(parameter) {
  return {
    type: actions.COMPONENT.APP.INPUT.CHANGE,
    parameter: parameter
  }
}

export { actionCreators };
export { actions }
