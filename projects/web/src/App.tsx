import React from 'react';
import './App.css';
import { AppShell } from './modules/core/components/app-shell/app-shell';
import { CoreRouter } from './modules/core/components';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { createRootReducer } from './modules/core/store';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import './amplify-config';

const history = createBrowserHistory();
const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(routerMiddleware(history)))
);

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppShell>
          <CoreRouter />
        </AppShell>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
