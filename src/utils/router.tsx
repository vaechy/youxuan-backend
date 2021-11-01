import React, { Suspense, lazy } from 'react'
import { Route, Switch, Redirect,RouteComponentProps, SwitchProps, match } from 'react-router-dom'
import { matchPath, Router } from "react-router"
import { Location } from 'history';

interface RouteConfigComponentProps<Params extends { [K in keyof Params]?: string } = {}>
    extends RouteComponentProps<Params> {
    route?: RouteConfig | undefined;
}
interface RouteConfig {
    key?: React.Key | undefined;
    location?: Location | undefined;
    component?: React.ComponentType<RouteConfigComponentProps<any>> | React.ComponentType | undefined | JSX.Element | any;
    path?: string | string[] | undefined;
    exact?: boolean | undefined;
    strict?: boolean | undefined;
    routes?: RouteConfig[] | undefined;
    render?: ((props: RouteConfigComponentProps<any>) => React.ReactNode) | undefined;
    [propName: string]: any;
}

interface MatchedRoute<
    Params extends { [K in keyof Params]?: string },
    TRouteConfig extends RouteConfig = RouteConfig
> {
    route: TRouteConfig;
    match: match<Params>;
}

// 实现react-router-config里的renderRoutes方法
function renderRoutes(routes:RouteConfig[] | undefined, extraProps = {}, switchProps: SwitchProps = {}) : JSX.Element|null{
      return routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={props =>
            route.render ? (
              route.render({ ...props, ...extraProps, route: route })
            ) : (
              <route.component {...props} {...extraProps} route={route} />
            )
          }
        />
      ))}
    </Switch>
  ) : null;
  }
// 实现react-router-config里的matchRoutes方法
function matchRoutes<
    Params extends { [K in keyof Params]?: string },
    TRouteConfig extends RouteConfig = RouteConfig
> (routes: TRouteConfig[], pathname: string, /*not public API*/ branch :any= []) :Array<MatchedRoute<Params, TRouteConfig>>{
    routes.some(route => {
        const match = route.path
            ? matchPath(pathname, route)
            : branch.length
                ? branch[branch.length - 1].match // use parent match
                : Router.computeRootMatch(pathname); // use default "root" match
        
                if (match) {
            branch.push({ route, match });

            if (route.routes) {
                matchRoutes(route.routes, pathname, branch);
            }
        }
        return match;
    });
    return branch;
}

export { renderRoutes, matchRoutes }