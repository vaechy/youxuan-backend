import React from "react";
import Login from '@/views/login';
import { HashRouter, Route, Link } from "react-router-dom";
class App extends React.Component{
  render():any {
    return (
      <HashRouter>
        <Route path='/login' component={ Login }>
        </Route>
      </HashRouter>
    )
  }
}
export default App