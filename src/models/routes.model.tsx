export interface IRoute {
    path: string;
    component: (props?: any) => JSX.Element;
    balance?: string;
    routes?: IRoute[];
}