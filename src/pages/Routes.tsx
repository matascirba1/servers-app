import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import AuthContextProvider from './login/components/AuthContextProvider';
import { Paths } from '../constants/paths';
import Servers from './servers/Servers';
import Login from './login/Login';
import PrivateRoute from './login/components/PrivateRoute';

export default function Routes() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to={Paths.Login} />
          </Route>
          <Route path={Paths.Login} component={Login} />
          <PrivateRoute path={Paths.Servers}>
            <Servers />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </AuthContextProvider>
  );
}
