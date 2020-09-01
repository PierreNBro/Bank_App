import React, { useContext, useEffect } from 'react';
import { IRoute } from './models/routes.model';
import Auth from './pages/auth.page';
import { Route, Redirect, useHistory, useLocation } from 'react-router-dom';
import LoginComponent from './components/login.component';
import RegisterComponent from './components/register.component';
import Home from './pages/home.page';
import Account from './pages/account.page';
import TransactionComponent from './components/transaction.component';
import { TokenContext } from './services/api.service';

const loginRoutes: IRoute[] = [
    { path: '/auth/signin', component: LoginComponent },
    { path: '/auth/register', component: RegisterComponent }
];

const accountRoutes: IRoute[] = [
    { path: '/account/:account', component: TransactionComponent }
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
    },
    {
        path: '/account',
        component: Account,
        routes: accountRoutes
    }
];

export function RouteWithSubRoutes(route: IRoute) {
    const { path, routes } = route;
    const { token } = useContext(TokenContext);
    const {pathname} = useLocation();
    const history = useHistory();
    useEffect(() => {
        console.log('Redirect with token: ', token);
        if (token !== null && pathname.includes('/auth')) {
            history.push('/home');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);
    const routeProps = (props: any) => (
        <route.component {...props} routes={routes} />
    );
    if (token === null && !path.includes('/auth')) {
        return (
            <Redirect to="/auth/signin" />
        );
    } else {
        return (
            <Route path={path} render={routeProps} />
        );

    }
}