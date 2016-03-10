import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import { Router } from 'react-router';

import { store, history } from './store.jsx';
import { actionCreators } from 'actions/index.jsx';

import routesFactory from './routes.jsx';

import App from 'containers/AppComponent.jsx';

import { addLocaleData, IntlProvider } from 'react-intl';

/**
 * Load locales for react-intl
 */
CONFIG.locales.forEach(lang => {
  const locale = require(`react-intl/lib/locale-data/${lang}`);
  addLocaleData(locale);
});


const mapStateToProps = state => Object.assign({}, state);

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators(actionCreators, dispatch);
  return { actions };
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

const routes = routesFactory(ConnectedApp, store);


/**
 * Load locales for react-intl
 */
CONFIG.locales.forEach(lang => {
  const locale = require(`react-intl/lib/locale-data/${lang}`);
  addLocaleData(locale);
});
function mapStateToPropsIntlProvider(state) {
  const { locale, messages } = state.locales;
  return { locale, messages };
}
const ConnectedIntlProvider = connect(mapStateToPropsIntlProvider)(IntlProvider);

ReactDOM.render(
  (
    <Provider store={store}>
      <ConnectedIntlProvider>
        <Router history={history}>
          {routes}
        </Router>
      </ConnectedIntlProvider>
    </Provider>
  ),
  document.getElementById('app')
);

