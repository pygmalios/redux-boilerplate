import React from 'react';
import { Route } from 'react-router';

import Test2 from 'components/Test2Component.jsx';

export default (ConnectedApp, store) => {
  return (
    <Route path="/" component={ConnectedApp}>
      <Route path="test" component={Test2}>
        <Route path=":id" components={{test: Test2, test2: Test2}}>
          <Route path=":test" component={Test2}></Route>
        </Route>
      </Route>
    </Route>
  )
}
