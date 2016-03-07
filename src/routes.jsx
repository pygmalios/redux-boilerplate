import { Route } from 'react-router';
import Test2 from 'components/Test2Component.jsx';
import Showcase from 'containers/Showcase.jsx';

export default (ConnectedApp) => {
  const routes = (
    <Route path="/" component={ConnectedApp}>
      <Route path="test" component={Test2}>
        <Route path=":id" component={Test2}>
          <Route path=":test" component={Test2} />
        </Route>
      </Route>
      <Route path="showcase" component={Showcase} />
    </Route>
  );
  return routes;
};
