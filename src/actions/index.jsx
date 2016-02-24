let actionCreators = {};
let actions = {};

function defaultActionHandler(actionType) {
  return (parameter) => {
    return (dispatch) => {
      dispatch({
        type: actionType,
        parameter: parameter
      })
    }
  }
}

function defineAction(actionIdentifier, handler = defaultActionHandler) {
  actions[actionIdentifier] = actionIdentifier;
  actionCreators[actionIdentifier] =
    (handler == defaultActionHandler)
      ? defaultActionHandler(actionIdentifier) : handler
}

var actionGroups = ['entity']

actionGroups.forEach((actionGroup) => {
  require(`actions/${actionGroup}.jsx`).default(defineAction, actionCreators)
})

console.log('actions', actions);
console.log('actionCreators', actionCreators);

export { actionCreators };
export { actions, actionCreators };
