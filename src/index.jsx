import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';

import store from './store.jsx'
import { actionCreators } from 'actions/index.jsx';

import App from 'components/AppComponent.jsx';

let mapStateToProps = (state) => {
  return {
    entity: state.entity,
    app: state.app
  }
};

let mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

let ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
  (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  ),
  document.getElementById('app')
);

