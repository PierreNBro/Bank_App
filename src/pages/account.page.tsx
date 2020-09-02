import React from 'react';
import { RouteWithSubRoutes } from '../routes.config';
import { IRoute } from '../models/routes.model';
import { useHistory } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Account({ routes }: IRoute) {
    const history = useHistory();
    return (
        <div className="flex flex-col p-10">
            <div className="mb-10">
                <div className="inline-block" onClick={() => history.goBack()}>
                    <FontAwesomeIcon className="mr-2 inline-block" icon={faArrowLeft} />
                    <div className="inline-block">BACK</div>
                </div>
            </div>
            <div className="flex flex-col px-10">
                {routes!.map((route: IRoute, i: number) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </div>

        </div>
    );
}

export default Account;