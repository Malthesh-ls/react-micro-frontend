import React, { Suspense, lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import { appPrefix } from '../constants';
import ContainerWrapper from '../containers/app/pages/containerWrapper';
import { Loading } from '../components';
const ProfileApp = lazy(() => import('../containers/profile-app'));
const ReportApp = lazy(() => import('../containers/report-app'));

export const router: RouteObject[] = [
  {
    index: true,
    element: (
      <ContainerWrapper>
        <h3 className="pt-3">Welcome to App Container</h3>
      </ContainerWrapper>
    ),
  },
  {
    path: `${appPrefix.profile}/*`,
    element: (
      <ContainerWrapper>
        <Suspense fallback={<Loading />}>
          <ProfileApp />
        </Suspense>
      </ContainerWrapper>
    ),
  },
  {
    path: `${appPrefix.report}/*`,
    element: (
      <ContainerWrapper>
        <Suspense fallback={<Loading />}>
          <ReportApp />
        </Suspense>
      </ContainerWrapper>
    ),
  },
  {
    path: '*',
    element: <Navigate to={`/`} />,
  },
];
