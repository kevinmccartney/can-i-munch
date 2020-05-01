import React from 'react';
import { Route, useRouteMatch, Switch } from 'react-router';
import { LoginView, CreateAccountView, ProfileView } from '../../views';
import { connect } from 'react-redux';
import { IStoreState } from '../../../core/models/store-state.interface';
import { ProtectedRoute } from '../../../shared';

export const AccountRouterComponent: React.FC<{
  authenticated: boolean;
}> = ({ authenticated }) => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/login`} component={LoginView} />
      <Route path={`${path}/create`} component={CreateAccountView} />
      <ProtectedRoute
        isAuthed={authenticated}
        path={`${path}/profile`}
        component={ProfileView}
      />
    </Switch>
  );
};

const mapStateToProps = (state: IStoreState) => ({
  authenticated: state.auth.authenticated,
});

export const AccountRouter = connect(mapStateToProps)(AccountRouterComponent);
