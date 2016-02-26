import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { Router } from 'react-router';

import { store, history } from './store.jsx';
import { actionCreators } from 'actions/index.jsx';

import routesFactory from './routes.jsx';

import App from 'containers/AppComponent.jsx';

const mapStateToProps = state => Object.assign({}, state);

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators(actionCreators, dispatch);
  return { actions };
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

const routes = routesFactory(ConnectedApp, store);

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

