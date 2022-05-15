import { lazy } from 'react';
import { useRoutes } from 'react-router-dom'
// const About = lazy(() => import('@/views/container/about'));
import About from '@/views/container/about';
import { Login } from '@/views/login';
import { Personal } from '@/views/container/personal';
import { User } from '@/views/container/system/users';
import { Rule } from '@/views/container/system/roles';
import { Power } from '@/views/container/system/powers';
import { Menu } from '@/views/container/system/menus';
import { Category } from '@/views/container/show/category';
import { Details } from '@/views/container/show/details';
import { default as Dashboard } from '@/views/container/dashboard';
import { Container } from "@/views/container"
//在router的index.js文件中添加嵌套路由对应的组件
const Routers = () => {
  return  useRoutes([
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/',
      element: <Container />,
      children: [
        {
          path: '/dashboard',
          element: <Dashboard />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: "personal",
          element: <Personal />
        },
        {
          path: "system/user",
          element: <User />
        },
        {
          path: "system/rule",
          element: <Rule />
        },
        {
          path: "system/power",
          element: <Power />
        },
        {
          path: "system/menu",
          element: <Menu />
        },
        {
          path: "show/details",
          element: <Details />
        },
        {
          path: 'show/category',
          element: <Category />
        }
      ]
    }
  ])
}
//将路由表数组导出
export default Routers
