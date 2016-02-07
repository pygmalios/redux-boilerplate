import React from 'react';

window.jQuery = window.$ = require('jquery');
require('bootstrap-sass');
require('styles/AppComponent.sass');

import Test2 from 'components/Test2Component.jsx';
import renderChildrenWithProps from 'helpers/renderChildrenWithProps.jsx';

class App extends React.Component {

  render() {
    console.log('app', this)
    return (
      <div>
        {renderChildrenWithProps(this)}
      </div>
    )
  }

}

export default App;

