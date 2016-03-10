window.jQuery = window.$ = $;
require('bootstrap-sass');

import renderChildrenWithProps from 'helpers/renderChildrenWithProps.jsx';
import getTestSelector from 'helpers/getTestSelector.jsx';
import { FormattedMessage, FormattedNumber } from 'react-intl';

class Showcase extends React.Component {

  constructor() {
    super();
    this.actions = {
      localeOnChange: this.localeOnChange.bind(this),
    };
  }

  localeOnChange(e) {
    this.props.actions.CHANGE_LOCALE(e.target.value);
  }

  render() {
    return (
      <div>
        <select onChange={this.actions.localeOnChange} {...getTestSelector('locale')}>
          <option value="en-US">English</option>
          <option value="sk-SK">Slovensky</option>
        </select>
        <div {...getTestSelector('greeting')}>
          <FormattedMessage id="greeting" tagName="p" />
        </div>
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
    );
  }

}

Showcase.propTypes = {
  actions: React.PropTypes.object,
};

export default Showcase;

