import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { router } from './routes';

export function Router() {
  const browserRouter = createBrowserRouter(router);
  return <RouterProvider router={browserRouter} />
}