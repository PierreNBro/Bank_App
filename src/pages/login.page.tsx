import React from 'react';
import { RouteWithSubRoutes } from '../routes.config';
import { IRoute, ILoginRoute } from '../models/routes.model';

function Login({ routes }: IRoute) {
    // need to check to make sure the route is not undefined
    
    return (
        <div>
            {routes!.map((route: IRoute, i: number) => (
            <RouteWithSubRoutes key={i} {...route} />
            ))}
        </div>
    );
}

export default Login;