import React, { Suspense } from "react";

import { renderRoutes } from "react-router-config";
import  routes from "@/router"
import { HashRouter, Route, BrowserRouter as Router ,Link,NavLink, Redirect,withRouter,Switch} from "react-router-dom";
class App extends React.Component<any>{
  
  render(): any {
    return (
      <HashRouter>
          {renderRoutes(routes)}
      </HashRouter>
      // <RouterPro data={data}/>
    )
  }
}
export default App