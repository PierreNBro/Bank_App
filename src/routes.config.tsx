import React from 'react';
import { IRoute, ILoginRoute } from './models/routes.model';
import Login from './pages/login.page';
import { Route } from 'react-router-dom';
import LoginComponent from './components/login.component';
import RegisterComponent from './components/register.component';

const loginRoutes: IRoute[] = [
    { path: '/auth/signin', component: LoginComponent },
    { path: '/auth/register', component: RegisterComponent}
];

export const routes: IRoute[] = [
    { path: '/auth',
    component: Login,
    routes:  loginRoutes
}
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