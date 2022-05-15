import React, { FC, Suspense } from "react";
import Routers from './router/index'
import routes from "@/router"
import { } from 'react-router-dom'
import { HashRouter, Route, BrowserRouter as Router, Link, NavLink } from "react-router-dom";
// import { StateClient } from '@hya/micro-state'
import { UserProvider } from "@/store/user"
import { QueryClientProvider, QueryClient } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
// console.log(StateClient);

const queryClient = new QueryClient()

import { } from '@/store/index'
const App: FC = () => {

  return <>
      <QueryClientProvider client={queryClient} >
          <HashRouter>
            <Routers />
          </HashRouter>
      <ReactQueryDevtools initialIsOpen={ false}/>
      </QueryClientProvider>
  </>
}

export default App