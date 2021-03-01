import React, { FunctionComponent } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { Paths } from '../../../constants/paths';
import { useAuth } from './AuthContextProvider';

type PrivateRouteProps = {
  path: Paths;
};

const PrivateRoute: FunctionComponent<PrivateRouteProps & RouteProps> = ({
  children,
  ...rest
}) => {
  let auth = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth?.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: Paths.Login,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
