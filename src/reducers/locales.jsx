const defaultLocale = 'en-US';
import messages from 'translations/all';

const defaultState = {
  locale: defaultLocale,
  messages: messages[defaultLocale],
};

export default (state = defaultState, action) => {
  switch (action.type) {

    case 'CHANGE_LOCALE': {
      const nextState = Object.assign({}, state);
      nextState.locale = action.parameter;
      nextState.messages = messages[nextState.locale];
      return nextState;
    }

    default:
      return state;
  }
};
