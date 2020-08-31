import React from 'react';
import { IRoute } from './models/routes.model';
import Login from './pages/login.page';
import { Route } from 'react-router-dom';

export const routes: IRoute[] = [
    { path: '/login', component: Login }
];

export function RouteWithSubRoutes(route: IRoute) {
    const { path, routes } = route;
    const routeProps = (props: any) => (
        <route.component {...props} routes={routes} />
    );

    return (
        <Route path={path} render={routeProps} />
    );
}