import React from 'react';
import { RouteWithSubRoutes } from '../routes.config';
import { IRoute } from '../models/routes.model';

function Account({ routes }: IRoute) {
    return (
        <div className="flex flex-col p-10">
            <div className="mb-10">BACK</div>
            <div className="flex flex-col px-10">
                {routes!.map((route: IRoute, i: number) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </div>

        </div>
    );
}

export default Account;