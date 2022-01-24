import { lazy } from 'react';

// export About import  ;
// import  About  from '@/views/container/about';
const About = lazy(() => import('@/views/container/about'));
import { Login } from '@/views/login';
import { Personal } from '@/views/container/personal';
import { User } from '@/views/container/system/users';
import { Rule } from '@/views/container/system/roles';
import { Power } from '@/views/container/system/powers';
import { Menu } from '@/views/container/system/menus';
import { Category } from '@/views/container/show/category';
import { Details } from '@/views/container/show/details';
import { Test } from '@/views/test'
import { default as Dashboard } from '@/views/container/dashboard';
import { Container } from "@/views/container"
//在router的index.js文件中添加嵌套路由对应的组件

//
const routes = [
  {
    path: "/login",
    component: Login,
    exact: false,
  },
  {
    path: "/test",
    component: Test,
    exact: false,
  },
  {
    path: "/",
    component: Container,
    exact:false,
    routes: [
      {
        path: "/dashboard",
        exact:false,
        component: Dashboard,
      },

      {
        path: "/about",
        exact:false,
        component: About,
      },
      {
        path: "/personal",
        exact:false,
        component: Personal,
      },
      {
        path: "/system/user",
        exact:false,
        component: User,
      },
      {
        path: "/system/rule",
        exact:false,
        component: Rule,
      },
      {
        path: "/system/power",
        exact:false,
        component: Power,
      },
      {
        path: "/system/menu",
        exact:false,
        component: Menu,
      },
      {
        path: "/show/category",
        component: Category,
      },
      {
        path: "/show/details",
        component: Details,
      },
    ] 
  },

];

//将路由表数组导出
export default routes;
