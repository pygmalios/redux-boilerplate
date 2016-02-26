import { Route } from 'react-router';
import Test2 from 'components/Test2Component.jsx';

export default (ConnectedApp) => {
  const routes = (
    <Route path="/" component={ConnectedApp}>
      <Route path="test" component={Test2}>
        <Route path=":id" component={Test2}>
          <Route path=":test" component={Test2} />
        </Route>
      </Route>
    </Route>
  );
  return routes;
};
