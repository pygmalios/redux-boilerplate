import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { Router } from 'react-router';

import { store, history } from './store.jsx'
import { actionCreators } from 'actions/index.jsx';

import RoutesFactory from './routes.jsx';

import App from 'containers/AppComponent.jsx';

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

let routes = RoutesFactory(ConnectedApp, store);

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>
  ),
  document.getElementById('app')
);

