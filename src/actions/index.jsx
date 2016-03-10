const actionCreators = {};
const actions = {};

function defaultActionHandler(actionType) {
  return (parameter) => (dispatch) => {
    dispatch({
      type: actionType,
      parameter,
    });
  };
}

function defineAction(actionIdentifier, handler = defaultActionHandler) {
  actions[actionIdentifier] = actionIdentifier;
  actionCreators[actionIdentifier] =
    (handler === defaultActionHandler)
      ? defaultActionHandler(actionIdentifier) : handler;
}

const actionGroups = ['entity', 'locales'];

actionGroups.forEach((actionGroup) => {
  require(`actions/${actionGroup}.jsx`)
    .default(defineAction, actionCreators);
});


export { actions, actionCreators };
