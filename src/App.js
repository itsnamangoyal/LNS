import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  Container
} from 'reactstrap'

import AppRoutes from "./Routes"
import Header from './components/header/Header'
const App = () => {

  return (
    <Container fluid style={{"margin":"0","padding":"0"}}>
      <BrowserRouter>
        <Header />
        <Switch>
          {AppRoutes.map(route=>(
            <Route
              id={route.id}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          )
          )}
        </Switch>
      </BrowserRouter> 
    </Container>
  )
}

export default App
