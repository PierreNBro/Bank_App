import { RouteProps } from "react-router-dom";

export interface IRoute {
    path: string;
    component: (props?: any) => JSX.Element;
    routes?: IRoute[];
}

export interface ILoginRoute extends IRoute {
    name: string;
}