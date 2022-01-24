import React, { FC, Suspense } from "react";
import { renderRoutes } from "react-router-config";
import  routes from "@/router"
import { HashRouter, Route, BrowserRouter as Router, Link, NavLink } from "react-router-dom";
// import { StateClient } from '@hya/micro-state'
import { UserProvider } from "@/store/user"
import { QueryClientProvider, QueryClient } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
// console.log(StateClient);

const queryClient = new QueryClient()

import { } from '@/store/index'
const App: FC = () => {
  
  // return<>
  //   <StoreContext.Provider value={UserStore()} >
  //     <HashRouter>
  //       {renderRoutes(routes)}
  //     </HashRouter>
  //   </StoreContext.Provider>
  // </>
    return<>
      <QueryClientProvider client={queryClient} >
          <HashRouter>
            {renderRoutes(routes)}
          </HashRouter>
      <ReactQueryDevtools initialIsOpen={ false}/>
      </QueryClientProvider>
  </>
}

export default App