window.jQuery = window.$ = $;
require('bootstrap-sass');
require('styles/AppComponent.sass');

import renderChildrenWithProps from 'helpers/renderChildrenWithProps.jsx';

import { addLocaleData, IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl';

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
import messages from '../translations/all';
const localisedMessages = messages[locale];


class App extends React.Component {

  render() {
    return (
      <IntlProvider locale={locale} messages={localisedMessages}>
        <div>
          <FormattedMessage id="greeting" tagName="p" />
          <br />
          <FormattedNumber value="123456" />
          <br />
          <FormattedMessage
            id="sentence"
            values={{
              name: 'Annie',
              numPhotos: 2,
              takenDate: Date.now(),
            }}
          />
          {renderChildrenWithProps(this)}
        </div>
      </IntlProvider>
    );
  }

}

export default App;

