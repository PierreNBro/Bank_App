import React from 'react';
import { RouteWithSubRoutes } from '../routes.config';
import { IRoute } from '../models/routes.model';
import ErrorComponent from '../components/error.component';

function Auth({ routes }: IRoute) {
    // need to check to make sure the route is not undefined

    return (
        <div>
            <ErrorComponent message="Error occored" />
            <div className="fixed w-screen h-screen bg-local bg-header"></div>
            <div className="flex  h-screen justify-center items-center">
                {routes!.map((route: IRoute, i: number) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </div>
        </div>
    );
}

export default Auth;