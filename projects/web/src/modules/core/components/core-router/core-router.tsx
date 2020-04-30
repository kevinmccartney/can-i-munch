import { Router, Route, Switch } from "react-router";
import React from 'react';
import { createBrowserHistory } from "history";
import { DashboardView } from "../../../dashboard/components";
import { AccountRouter } from "../../../account/components/account-router/account-router";
import { MessagingView } from "../../../messaging/components";
import { UsersView } from "../../../users/components";
import { ProfileView } from "../../../account/views";

const history = createBrowserHistory();

export const CoreRouter = () => (
    <Switch>
      <Route path="/" exact>
        <DashboardView />
      </Route>
      <Route path="/users" component={UsersView} />
      <Route path="/account" component={AccountRouter} />
      <Route path="/messaging" component={MessagingView} />
    </Switch>
)