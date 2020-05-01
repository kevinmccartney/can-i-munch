import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

export const ProtectedRoute: React.FC<
  {
    component: React.FC;
    isAuthed: boolean;
  } & RouteProps
> = ({ isAuthed, component, path, ...rest }) => {
  const TargetComponent = component;

  return (
    <Route
      path={path}
      {...rest}
      render={() => {
        if (isAuthed) {
          return <TargetComponent />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/account/login',
              }}
              push
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
