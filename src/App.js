import React, {useState} from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppRoutes from "./Routes"
import './App.css'
import Header from './components/common/Header/Header'
import SideDrawer from './components/common/SideDrawer/SideDrawer'

const App = (props) => {
  const [isMenuOpen, setMenuState] = useState(false)
  const menuToggler = () => setMenuState(!isMenuOpen)

  return (
    <div className="whole-page">
      {isMenuOpen ?
        <SideDrawer menuButtonClickHandler={menuToggler} />
        :
        <div className="main-page">
          <Header menuButtonClickHandler={menuToggler} />
          <hr className="headerSplit" />
          <BrowserRouter>
            <Switch>
              {AppRoutes.map(route => (
                <Route
                  key={route.id}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              )
              )}
            </Switch>
          </BrowserRouter>
        </div>
      }
    </div>
  )
}

export default App