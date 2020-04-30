import React from 'react';
import { Route, useRouteMatch, Switch } from "react-router";
import { LoginView, CreateAccountView, ProfileView } from '../../views';



export const AccountRouter = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/login`} component={LoginView} />
      <Route path={`${path}/create`} component={CreateAccountView} />
      <Route path={`${path}/profile`} component={ProfileView} />
    </Switch>
  );
}