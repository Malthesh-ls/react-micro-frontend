import React, { Children, Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { NavigationMangaer } from '../hoc/navigation-manager';
import MyApp from '../containers/app';
import { ProfileList, ProfileDetails, ProfileLanding, ProfileWrapper } from '../containers/pages';

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
          <ProfileWrapper>
            <ProfileLanding />
          </ProfileWrapper>
        )
      },
      {
        path: `list`,
        element: (
          <ProfileWrapper>
            <ProfileList />
          </ProfileWrapper>
        )
      },
      {
        path: `:id`,
        element: (
          <ProfileWrapper>
            <ProfileDetails />
          </ProfileWrapper>
        )
      },
      {
        path: `*`,
        element: <Navigate to={`/`} />
      }
    ]
  },
];