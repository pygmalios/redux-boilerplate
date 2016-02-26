window.jQuery = window.$ = $;
require('bootstrap-sass');
require('styles/AppComponent.sass');

import renderChildrenWithProps from 'helpers/renderChildrenWithProps.jsx';

class App extends React.Component {

  render() {
    return (
      <div>
        {renderChildrenWithProps(this)}
      </div>
    );
  }

}

export default App;

