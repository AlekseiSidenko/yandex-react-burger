import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';
import { Provider } from 'react-redux';
import store from "./services/store";
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  // <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  // </React.StrictMode>
);