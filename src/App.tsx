import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { routes, RouteWithSubRoutes } from './routes.config';
import { IRoute } from './models/routes.model';
import { TokenContextProvider } from './services/api.service';

function App() {
  return (
    <TokenContextProvider>
      <Router>
        <Switch>
          {routes.map((route: IRoute, i: number) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
          {}
          <Route exact path="/">
            <Redirect to="/auth/signin" />
          </Route>
        </Switch>
      </Router>
    </TokenContextProvider>

  );
}

export default App;
