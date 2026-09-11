import React, { Children, Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { NavigationMangaer } from '../hoc/navigation-manager';
import MyApp from '../containers/app';
import { ReportsLanding, ReportsWrapper } from '../containers/pages';

export const routes = [
  {
    path: `/`,
    element: (
      <NavigationMangaer>
        <MyApp />
      </NavigationMangaer>
    ),
    children: [
      {
        index: true,
        element: (
          <ReportsWrapper>
            <ReportsLanding />
          </ReportsWrapper>
        ),
      },
      {
        path: `*`,
        element: <Navigate to={`/`} />,
      },
    ],
  },
];
