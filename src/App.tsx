import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { routes, RouteWithSubRoutes } from './routes.config';
import { IRoute } from './models/routes.model';

function App() {
  return (
    <Router>
        <Switch>
          {routes.map((route: IRoute, i: number) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
          <Route exact path="/">
            <Redirect to="/auth/signin"/>
          </Route>
        </Switch>  
      </Router>
  );
}

export default App;
