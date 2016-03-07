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

/**
 * Set locale and extract it's messages (interface texts)
 */
// const locale = 'en-US';
const locale = 'sk-SK';
import messages from './translations/all';
const localisedMessages = messages[locale];

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
      <IntlProvider locale={locale} messages={localisedMessages}>
        <Router history={history}>
          {routes}
        </Router>
      </IntlProvider>
    </Provider>
  ),
  document.getElementById('app')
);

