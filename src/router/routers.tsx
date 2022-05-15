import { Route, Switch, SwitchProps } from "react-router-dom";

import { RouteConfig} from './types/RouteConfigTypes'


function renderRoutes(
  routes: RouteConfig[] | undefined,
  extraProps?: any,
  switchProps?: SwitchProps,
): JSX.Element | null{
  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={props => {
            console.log('router',props);
            console.log(route.render);
            
            if (route.render) {
                return route.render({ ...props, ...extraProps, route: route })
            } else {
              console.log('404');
              console.log(route);
              
                return ( route.component ? <route.component {...props} {...extraProps} route={route} /> : <div>-------------------------</div>)
              }
            }
          }
        />
      ))}
    </Switch>
  ) : null;
};

// const routeRender = (route, props, extraProps) => {
//   // 登录判断(需要登录 && 未登录-->跳登录页面,,,,,,,不需要登录 || 已经登录-->正常跳转)
//   const login = route.requiresAuth && !requiresAuth //跳登录
//   // 该角色是否有权限访问该页面(当前角色是否在 路由要求角色数组中)
//   const auth = route.permissions.includes(permissions) //有权限
//   console.log(222, '是需要跳转登录页面' + login, '是否有权限' + auth, props)
//   // 判断渲染route
//   if (login) {
//     return <Redirect to={{ path: '/login', message: '请登录后再操作！' }} />
//   } else {
//     if (auth) {
//       return route.render ? (
//         route.render({ ...props, ...extraProps, route: route })
//       ) : (
//         <route.component {...props} {...extraProps} route={route} />
//       )
//     } else {
//       alert('您暂无权限')
//       return <Redirect to={{ path: '/login', message: '请登录后再操作！' }} />
//     }
//   }
// }
export {renderRoutes} ;
