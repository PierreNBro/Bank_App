export interface IRoute {
    path: string;
    component: (props?: any) => JSX.Element;
    routes?: IRoute[];
}