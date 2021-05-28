import React from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'

import Login from '../pages/Auth/Login'
import Signup from '../pages/Auth/Signup'
import Home from '../pages/Home'

const NoAuthBuilder = () => {
  return (
    <div>
      <Switch>
        <Route exact path={`/`} component={Home} />
        <Route exact path={`/login`} component={Login} />
        <Route exact path={`/signup`} component={Signup} />
        <Redirect to='/404' />
      </Switch>
    </div>
  )
}

export default NoAuthBuilder
