import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Location } from 'history';

export interface RouteConfigComponentProps<Params extends { [K in keyof Params]?: string } = {}>
    extends RouteComponentProps<Params> {
    route?: RouteConfig | undefined;
}

export interface RouteConfig {
    key?: React.Key | undefined;
    location?: Location | undefined;
    component?: React.ComponentType<RouteConfigComponentProps<any>> | React.ComponentType | undefined;
    path?: string | string[] | undefined;
    exact?: boolean | undefined;
    strict?: boolean | undefined;
    routes?: RouteConfig[] | undefined;
    render?: ((props: RouteConfigComponentProps<any>) => React.ReactNode) | undefined;
    [propName: string]: any;
}