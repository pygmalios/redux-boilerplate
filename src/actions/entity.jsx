export default (defineAction, actionCreators) => {
  defineAction('ENTITY_LOAD_START');
  defineAction('ENTITY_LOAD_SUCCESS');

  defineAction('ENTITY_SHOW', (parameter) => (dispatch) => {
    actionCreators['ENTITY_LOAD_START'](parameter)(dispatch);
    actionCreators['ENTITY_LOAD_SUCCESS'](parameter)(dispatch);
  });
};
