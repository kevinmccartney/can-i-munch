import React from 'react';
import './App.css';
import { AppShell } from './modules/core/components/app-shell/app-shell';
import { CoreRouter } from './modules/core/components';
import { Router } from 'react-router';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export const App: React.FC = () => {
  return (
    <Router history={history} >
      <AppShell>
        <CoreRouter />
      </AppShell>
    </Router>
  );
}

export default App;
