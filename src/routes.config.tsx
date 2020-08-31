import React from 'react';
import { IRoute } from './models/routes.model';
import Auth from './pages/auth.page';
import { Route } from 'react-router-dom';
import LoginComponent from './components/login.component';
import RegisterComponent from './components/register.component';
import Home from './pages/home.page';

const loginRoutes: IRoute[] = [
    { path: '/auth/signin', component: LoginComponent },
    { path: '/auth/register', component: RegisterComponent }
];

const homeRoutes: IRoute[] = [

];

export const routes: IRoute[] = [
    {
        path: '/auth',
        component: Auth,
        routes: loginRoutes
    },
    {
        path: '/home',
        component: Home,
        routes: homeRoutes
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