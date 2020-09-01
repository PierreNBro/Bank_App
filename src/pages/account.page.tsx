import React from 'react';
import { RouteWithSubRoutes } from '../routes.config';
import { IRoute } from '../models/routes.model';
import { useHistory } from 'react-router-dom';

function Account({ routes }: IRoute) {
    const history = useHistory();
    return (
        <div className="flex flex-col p-10">
            <div className="mb-10" onClick={() => history.goBack()}>BACK</div>
            <div className="flex flex-col px-10">
                {routes!.map((route: IRoute, i: number) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </div>

        </div>
    );
}

export default Account;