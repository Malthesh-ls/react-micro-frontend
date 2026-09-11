import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './containers/app';

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
