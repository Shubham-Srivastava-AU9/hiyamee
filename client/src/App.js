import React,{useContext, useEffect, useState}  from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainBuilder from './Routes/MainBuilder'
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from '../src/utils/setAuthToken'
import NotFound from './pages/Misc/NotFound'




if(localStorage.token){
  setAuthToken(localStorage.token)
}

const App = () => {
 
  

  

  return (
    <AuthState>
    <AlertState>
    <Router>
      <div className = "App">
        <MainBuilder />
      </div>
      <Switch>
        <Route exact path='/404' component={NotFound} />
      </Switch>
    </Router>
    </AlertState>
    </AuthState>
  )
}

export default App
