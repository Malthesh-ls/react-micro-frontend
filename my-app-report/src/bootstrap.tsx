import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createRouter } from './routing/router-factory';
import { RoutingStrategy } from './routing/types';
import { store } from './redux/store';

// Import all of Bootstrap’s JS
import 'bootstrap';

const mount = ({
  mountPoint,
  initialPathname,
  routingStrategy,
}: {
  mountPoint: HTMLElement;
  initialPathname?: string;
  routingStrategy?: RoutingStrategy;
}) => {
  const router = createRouter({ strategy: routingStrategy, initialPathname });
  const root = createRoot(mountPoint);
  root.render(
    <Provider store={store}>
      <RouterProvider
        router={router}
      />
    </Provider>
  )
  return () => queueMicrotask(() => root.unmount());
}

export { mount };